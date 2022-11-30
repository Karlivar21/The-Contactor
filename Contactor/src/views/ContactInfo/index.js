import React, { useEffect, useState } from 'react'
import { View, Text, TouchableHighlight, Image, Linking, Alert, Platform} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import styles from './styles'
import EditModal from '../../components/editModal'
import AddPhoto from '../../components/addphoto'
import * as imageService from '../../services/imageservice'
import { editContact, deleteContact} from '../../services/fileservice'

export default function ContactInfo ({ route }) {
  const [name, setName] = useState(route.params.name)
  const [image, setImage] = useState(route.params.thumbnailPhoto)
  const [phoneNumber, setPhoneNumber] = useState(route.params.phoneNumber)
  const [isSelected, setIsSelected] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [openAddPhoto, setOpenAddPhoto] = useState(false)
  const [openContact, setOpenContact] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState(false)
  const [setPhoto, setSetPhoto] = useState([])
  const [id, setId] = useState(route.params.id)
 
    const callNumber = phone => {
        console.log('callNumber ----> ', phone);
        let phoneNumber = phone;
        if (Platform.OS !== 'android') {
            phoneNumber = `telprompt:${phone}`;
        }
        else  {
            phoneNumber = `tel:${phone}`;
        }
        Linking.canOpenURL(phoneNumber)
        .then(supported => {
            if (!supported) {
            Alert.alert('Phone number is not available');
            } else {
            return Linking.openURL(phoneNumber);
            }
        })
        .catch(err => console.log(err));
        };

  const handleEditContact = async (contact) => {
    if (Object.keys(setPhoto).length === 0) {   
        contact.thumbnailPhoto = image
    }else {  
        contact.thumbnailPhoto = setPhoto
        }
    if (contact.name == '') {
      contact.name = name;
    }
    else if (contact.phoneNumber == '') {
      contact.phoneNumber = phoneNumber;
    }
    console.log(id)
    let contactId = await editContact({id, name, phoneNumber, image}, contact)
    setName(contact.name)
    setImage(contact.thumbnailPhoto)
    setPhoneNumber(contact.phoneNumber)
    setId(contactId);
    setOpenEdit(false)
  }

  const selectFromCameraRoll = async () => {
    const selectedPhoto= await imageService.selectFromCameraRoll()
    setSetPhoto(selectedPhoto[0].uri)
    setIsSelected(true)
  }
  const takePhoto = async () => {
    const selectedPhoto = await imageService.takePhoto()
    setSetPhoto(selectedPhoto[0].uri)
    setSelectedPhoto(true)
  }

  const switchModal = () => {
    setOpenEdit(false)
    setOpenAddPhoto(true)
  }

  const switchModalBack = () => {
    setOpenAddPhoto(false)
    setOpenEdit(true)
  }

  const askDeleteContact = () => {
    Alert.alert(
      'Delete Contact',
      'Are you sure you want to delete this contact?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => handleDelete()},
      ],
      {cancelable: false},
    );
  }

  const handleDelete = async () => {
    deleteContact({id, name, phoneNumber, image})
    setName('')
    setImage('')
    setPhoneNumber('')
    setId('')
    setOpenContact(false)
  }


  return (
        <View style={styles.container}> 
            <View style={styles.contact}>
                <Image style={styles.image} source={{ uri: image }}/>
                <Text style={styles.name}>{name}</Text>
            <View style={styles.number}>
                <Text style={styles.phone}>+354 {phoneNumber}</Text>
                </View>
                <TouchableHighlight style={styles.button}>
                    <FontAwesome name="phone" style={styles.phoneIcon} onPress={()=> callNumber(phoneNumber)}/>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => setOpenEdit(true)}>
                    <Text style={styles.edit}>Edit</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button2}>
                    <Text style={styles.buttonText} onPress={()=> askDeleteContact()}>Delete</Text>
                </TouchableHighlight>
                
            <EditModal
            visible={openEdit}
            closeModal={() => setOpenEdit(false)}
            editContact={handleEditContact}
            name={name}
            image={setPhoto}
            phoneNumber={phoneNumber}
            isSelected={isSelected}
            addPhoto = {switchModal}
            />
            <AddPhoto
            visible={openAddPhoto}
            selectFromCameraRoll={selectFromCameraRoll}
            closeModal={switchModalBack}
            takePhoto={takePhoto}
            />
            </View>
        </View>
        

  )
}
