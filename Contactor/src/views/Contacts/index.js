import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import styles from './styles'
import ContactList from '../../components/contactslist'
import { addContact, getAllContacts } from '../../services/fileservice'
import Toolbar from '../../components/toolbar'
import AddModal from '../../components/addmodal'
import AddPhoto from '../../components/addphoto'
import * as imageService from '../../services/imageservice'
import latinize from 'latinize'

export default function Contacts ({ navigation }) {
  const [getContacts, setGetContacts] = useState([])
  const [openContact, setOpenContact] = useState(false)
  const [photo, setPhoto] = useState({})
  const [openAddPhoto, setOpenAddPhoto] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState(false)
  const [input, setInput] = useState('')

  const fakePhoto = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    navigation.addListener('focus', () => {
      fetchContacts();
  });

//     useEffect(() => {
//     fetchContacts();
// },[getContacts]);


    const fetchContacts = async () => {
      const data = await getAllContacts();
      const Contacts = [];
      for (let i = 0; i < data.length; i++) {
          const info = JSON.parse(data[i].file);
          const newid = data[i].name.split("-")[1];
          const id = newid.split(".")[0];
          const name = info.name;
          const phoneNumber = info.phoneNumber;
          const thumbnailPhoto = info.thumbnailPhoto;
        Contacts.push({id, name, phoneNumber, thumbnailPhoto})
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

    const handleAddContact = async (Contact) => {
        const name = Contact.name 
        const phoneNumber = Contact.phoneNumber
        if (Object.keys(photo).length === 0) {   
            Contact.thumbnailPhoto = fakePhoto
        }else {  
            Contact.thumbnailPhoto = photo
        }
        const thumbnailPhoto = Contact.thumbnailPhoto
        const data = await addContact({name, phoneNumber, thumbnailPhoto});
        const id = data.split("-")[1];
        setGetContacts((currentContacts) => {
        return [...getContacts, {id, name, phoneNumber, thumbnailPhoto}]
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
            input={input}
            setInput={setInput}
            />
        <AddModal
            visible={openContact}
            closeModal={closeModal}
            handleAddContact={handleAddContact}
            addPhoto = {switchModal}
            isSelected={selectedPhoto}
            photo = {photo}
            fakePhoto = {fakePhoto}
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
