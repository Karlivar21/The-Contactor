import React, { useEffect, useState } from 'react'
import { View, Text, TouchableHighlight, TextInput, Image } from 'react-native'
import styles from './styles'

export default function ContactInfo ({ route }) {
  const [name, setName] = useState(route.params.name)
  const [image, setImage] = useState(route.params.thumbnailPhoto)
  const [phoneNumber, setPhoneNumber] = useState(route.params.phoneNumber)
  const id = route.params.id
  console.log(image)

  return (
        <View style={styles.container}>
            <View style={styles.contact}>
                <Image style={styles.image} source={{ uri: image }}/>
                <Text style={styles.name}>{name}</Text>
                <TouchableHighlight>
                    <Text style={styles.edit}>Edit</Text>
                </TouchableHighlight>
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
