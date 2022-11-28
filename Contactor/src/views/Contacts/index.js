import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import styles from './styles'
import ContactList from '../../components/contactslist'
import { addContact, getAllContacts } from '../../services/fileservice'
import data from '../../resources/data'
import Toolbar from '../../components/toolbar'
import AddModal from '../../components/addmodal'
import AddPhoto from '../../components/addphoto'
import * as imageService from '../../services/imageservice'

export default function Contacts ({ navigation }) {
  const [contacts, setContacts] = useState(data.contacts)
  const [openContact, setOpenContact] = useState(false)
  const [photo, setPhoto] = useState({})
  const [openAddPhoto, setOpenAddPhoto] = useState(false)
  const [selectedContacts, setSelectedContacts] = useState([])
  const [selectedPhoto, setSelectedPhoto] = useState(false)

//   navigation.addListener('focus', () => {
//     getContacts();
// });

//     useEffect(() => {
//     getContacts();
// },[]);

//   const getContacts = async () => {
//     const data = await getAllContacts();
//     console.log(data)
//     contacts = [];
//     for (let i = 0; i < data.length; i++) {
//         const info = JSON.parse(data[i].file);
//         console.log(info)
//         const id = info[i].name.split('.')[0];
//         const name = info[i].name;
//         const phoneNumber = info[i].phoneNumber;
//         const imageURI = info[i].imageURI;
//     setContacts(contacts => [...contacts, { id, name, phoneNumber, imageURI }])
//     }}

    const selectFromCameraRoll = async () => {
        const photo = await imageService.selectFromCameraRoll()
        setPhoto(photo[0].uri)
        setSelectedPhoto(true)
    }

    const addContact = (Contact) => {
        const lastId = contacts.length
        Contact.id = lastId + 1
        Contact.thumbnailPhoto = photo
        setContacts((currentContacts) => {
        return [...contacts, Contact]
        })
        setOpenContact(false)
        setSelectedPhoto(false)
    }

    const switchModal = () => {
        setOpenContact(false)
        setOpenAddPhoto(true)
    }

    const switchModalBack = () => {
        setOpenAddPhoto(false)
        setOpenContact(true)
    }

    const closeModal = () => {
        setOpenContact(false)
        setSelectedPhoto(false)
    }

  return (
    <View style={styles.container}>
        <Toolbar 
        onAdd = {() => setOpenContact(true)}
        />
        {
            <ContactList
                contacts={contacts}
                navigation={navigation}
                />
        }
        <AddModal
            visible={openContact}
            closeModal={closeModal}
            addContact={addContact}
            addPhoto = {switchModal}
            isSelected={selectedPhoto}
            photo = {photo}
            />

        <AddPhoto
            visible={openAddPhoto}
            selectFromCameraRoll={selectFromCameraRoll}
            closeModal={switchModalBack}
            />
    </View>
  )
}
