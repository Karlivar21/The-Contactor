import React, { useEffect, useState } from 'react'
import { View, Text, TouchableHighlight, Image, Linking, Alert, Platform} from 'react-native'
import styles from './styles'
import EditModal from '../../components/editModal'
import AddPhoto from '../../components/addphoto'
import * as imageService from '../../services/imageservice'
import { editContact } from '../../services/fileservice'

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
  const id = route.params.id
 
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
    await editContact({id, name, phoneNumber, image}, contact)
    setOpenEdit(false)
  }

  const selectFromCameraRoll = async () => {
    const selectedPhoto= await imageService.selectFromCameraRoll()
    setSetPhoto(selectedPhoto[0].uri)
    setIsSelected(true)
  }

  const switchModal = () => {
    setOpenEdit(false)
    setOpenAddPhoto(true)
  }

  const switchModalBack = () => {
    setOpenAddPhoto(false)
    setOpenEdit(true)
  }
  return (
        <View style={styles.container}> 
            <View style={styles.contact}>
                <Image style={styles.image} source={{ uri: image }}/>
                <Text style={styles.name}>{name}</Text>
                <TouchableHighlight onPress={() => setOpenEdit(true)}>
                    <Text style={styles.edit}>Edit</Text>
                </TouchableHighlight>
            <View style={styles.number}>
                <Text style={styles.phone}>+354 {phoneNumber}</Text>
                </View>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText} onPress={()=> callNumber(phoneNumber)}>Call</Text>
                   
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
            />
            </View>
        </View>

  )
}
