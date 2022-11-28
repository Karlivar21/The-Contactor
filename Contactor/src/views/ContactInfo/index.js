import React, { useEffect, useState } from 'react'
import { View, Text, TouchableHighlight, Image } from 'react-native'
import Toolbar from '../../components/toolbar'
import styles from './styles'

export default function ContactInfo ({ route }) {
  const [name, setName] = useState(route.params.name)
  const [image, setImage] = useState(route.params.thumbnailPhoto)
  const [phoneNumber, setPhoneNumber] = useState(route.params.phoneNumber)
  const id = route.params.id
  console.log(image)

//   const editContact = (contact) => {
//         const lastId = contacts.length
//         contact.id = lastId + 1
//         contact.thumbnailPhoto = photo
//         setContacts((currentContacts) => {
//         return [...contacts, contact]
//         })
//         setOpenContact(false)
//         setSelectedPhoto(false)
//   }


  return (
        <View style={styles.container}>
            <Toolbar
            onEdit = {() => setOpendContact(true)}
            />
            <View style={styles.contact}>
                <Image style={styles.image} source={{ uri: image }}/>
                <Text style={styles.name}>{name}</Text>
            <View style={styles.number}>
                <Text style={styles.phone}>+354 {phoneNumber}</Text>
                </View>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>Call</Text>
                </TouchableHighlight>
            </View>
        </View>

  )
}
