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
import * as importContacts from 'expo-contacts';

export default function Contacts ({ navigation }) {
  const [getContacts, setGetContacts] = useState([])
  const [openContact, setOpenContact] = useState(false)
  const [photo, setPhoto] = useState({})
  const [openAddPhoto, setOpenAddPhoto] = useState(false)
  const [selectedContacts, setSelectedContacts] = useState([])
  const [selectedPhoto, setSelectedPhoto] = useState(false)
  const [input, setInput] = useState('')

    navigation.addListener('focus', () => {
      fetchContacts();
  });

      useEffect(() => {
      fetchContacts();
  },[getContacts]);

        
        

    const fetchContacts = async () => {
      const data = await getAllContacts();
      console.log(data)
      const Contacts = [];
      for (let i = 0; i < data.length; i++) {
          const info = JSON.parse(data[i].file);
          console.log(info)
          const id = info.name.split('.')[0];
          const name = info.name;
          const phoneNumber = info.phoneNumber;
          const imageURI = info.imageURI;
        Contacts.push({id, name, phoneNumber, imageURI})
      setGetContacts(Contacts)
      }}

  const selectFromCameraRoll = async () => {
    const photo = await imageService.selectFromCameraRoll()
    setPhoto(photo[0].uri)
    setSelectedPhoto(true)
  }

    const takePhoto = async () => {
        const photo = await imageService.takePhoto()
        setPhoto(photo.uri)
        setSelectedPhoto(true)
    }

    const addContact = (Contact) => {
        const lastId = getContacts.length
        Contact.id = lastId + 1
        Contact.thumbnailPhoto = photo
        setGetContacts((currentContacts) => {
        return [...getContacts, Contact]
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
        setPhoto({})
    }

    // const importContact = async () => {
    //     const { status } = await importContacts.requestPermissionsAsync();
    //     if (status === 'granted') {
    //     const { data } = await importContacts.getContactsAsync({
    //         fields: [Contacts.Fields.Emails],
    //     });
    
    //     if (data.length > 0) {
    //       const contact = data[0];
    //       console.log(contact);
          
    //     }};
    // }
      
    

  return (
    <View style={styles.container}>
        <Toolbar
        onAdd = {() => setOpenContact(true)}
        input = {input}
        setInput = {setInput}
        // importContact = {importContact}
        />
        <ContactList
            contacts={getContacts}
            navigation={navigation}
            selectFromCameraRoll={selectFromCameraRoll}
            addContact={addContact}
            input={input}
            setInput={setInput}
            />
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
            takePhoto={takePhoto}
            closeModal={switchModalBack}
            />
    </View>
  )
}
