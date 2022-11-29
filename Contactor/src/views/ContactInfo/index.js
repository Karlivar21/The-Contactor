import React, { useEffect, useState } from 'react'
import { View, Text, TouchableHighlight, Image, Linking, Alert, Platform} from 'react-native'
import styles from './styles'
import EditModal from '../../components/editModal'
import AddPhoto from '../../components/addphoto'
import { selectFromCameraRoll, switchModalBack } from '../../services/imageservice'

export default function ContactInfo ({ route }) {
  const [name, setName] = useState(route.params.name)
  const [image, setImage] = useState(route.params.thumbnailPhoto)
  const [phoneNumber, setPhoneNumber] = useState(route.params.phoneNumber)
  const [isSelected, setIsSelected] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [openAddPhoto, setOpenAddPhoto] = useState(false)
  const [openContact, setOpenContact] = useState(false)
  const id = route.params.id

  const fakePhoto = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  navigation.addListener('focus', () => {
    fetchContacts();
});
  

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

  const editContact = async (contact) => {
    const name = contact.name 
    const phoneNumber = contact.phoneNumber
    if (Object.keys(photo).length === 0) {   
        contact.thumbnailPhoto = fakePhoto
    }else {  
        contact.thumbnailPhoto = photo
        }
    const thumbnailPhoto = contact.thumbnailPhoto
    
    // setPhoneNumber(contact.phoneNumber)
    // setName(contact.name)
    // setImage(contact.thumbnailPhoto)
    // setOpenEdit(false)
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
            editContact={editContact}
            name={name}
            image={image}
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
