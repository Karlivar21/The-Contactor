import React, { useEffect, useState } from 'react'
import { View, Alert } from 'react-native'
import styles from './styles'
import ContactList from '../../components/contactslist'
import { addContact, getAllContacts, deleteContact } from '../../services/fileservice'
import Toolbar from '../../components/toolbar'
import AddModal from '../../components/addmodal'
import AddPhoto from '../../components/addphoto'
import * as imageService from '../../services/imageservice'
import * as expoContacts from 'expo-contacts'

export default function ListContacts ({ navigation }) {
  const [getContacts, setGetContacts] = useState([])
  const [openContact, setOpenContact] = useState(false)
  const [photo, setPhoto] = useState({})
  const [openAddPhoto, setOpenAddPhoto] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState(false)
  const [input, setInput] = useState('')
  const [getImportContacts, setImportContact] = useState([])

  const fakePhoto = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  navigation.addListener('focus', () => {
    fetchContacts()
  })

  const fetchContacts = async () => {
    const data = await getAllContacts()
    const Contacts = []
    for (let i = 0; i < data.length; i++) {
      const info = JSON.parse(data[i].file)
      const newid = data[i].name.split('-')[1]
      const id = newid.split('.')[0]
      const name = info.name
      const phoneNumber = info.phoneNumber
      const thumbnailPhoto = info.thumbnailPhoto
      Contacts.push({ id, name, phoneNumber, thumbnailPhoto })
      Contacts.sort(function (a, b) {
        if (a.name < b.name) { return -1 }
        if (a.name > b.name) { return 1 }
        return 0
      })
      setGetContacts(Contacts)
    }
  }

  const selectFromCameraRoll = async () => {
    const photo = await imageService.selectFromCameraRoll()
    setPhoto(photo[0].uri)
    setSelectedPhoto(true)
  }

  const takePhoto = async () => {
    const photo = await imageService.takePhoto()
    setPhoto(photo[0].uri)
    setSelectedPhoto(true)
  }

  const handleAddContact = async (Contact) => {
    const name = Contact.name
    const phoneNumber = Contact.phoneNumber
    if (Object.keys(photo).length === 0) {
      Contact.thumbnailPhoto = fakePhoto
    } else {
      Contact.thumbnailPhoto = photo
    }
    const thumbnailPhoto = Contact.thumbnailPhoto
    const data = await addContact({ name, phoneNumber, thumbnailPhoto })
    const id = data.split('-')[1]
    setGetContacts((currentContacts) => {
      return [...currentContacts, { id, name, phoneNumber, thumbnailPhoto }]
    })

    setOpenContact(false)
    setSelectedPhoto(false)
    await fetchContacts()
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

  const askImportContacts = () => {
    Alert.alert(
      'Import Contact',
      'Are you sure you want to Import your contacts?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => importContact() }
      ],
      { cancelable: false }
    )
  }

  const importContact = async () => {
    const { data } = await expoContacts.getContactsAsync({
      fields: [expoContacts.Fields.PhoneNumbers]
    })
    for (let i = 0; i < data.length; i++) {
      const contact = data[i]
      const name = contact.name
      const Numberlist = contact.phoneNumbers[0]
      const phoneNumber = Numberlist.digits
      await handleAddContact({ name, phoneNumber })
    }
  }

  return (
    <View style={styles.container}>
        <Toolbar
        onAdd = {() => setOpenContact(true)}
        input = {input}
        setInput = {setInput}
        importContact = {() => askImportContacts()}
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
