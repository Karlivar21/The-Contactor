import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import styles from './styles'
import ContactList from '../../components/contactslist'
import { addContact, getAllContacts } from '../../services/fileservice'
import data from '../../resources/data'
import Toolbar from '../../components/toolbar'
import AddModal from '../../components/addmodal'
import * as imageService from '../../services/imageservice'

export default function Contacts ({ navigation }) {
  const [contacts, setContacts] = useState(data.contacts)
  const [openContact, setOpenContact] = useState(false)
  const [photo, setPhoto] = useState({})
    console.log(contacts)
  const [selectedContacts, setSelectedContacts] = useState([])

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
    }

    const addContact = (Contact) => {
        const lastId = contacts.length
        Contact.id = lastId + 1
        Contact.thumbnailPhoto = photo
        setContacts((currentContacts) => {
        return [...contacts, Contact]
        })
        setOpenContact(false)
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
                selectFromCameraRoll={selectFromCameraRoll}
                addContact={addContact}
                />
        }
        <AddModal
            visible={openContact}
            closeModal={() => setOpenContact(false)}
            selectFromCameraRoll={selectFromCameraRoll}
            addContact={addContact}
            />

    </View>


  )
}
