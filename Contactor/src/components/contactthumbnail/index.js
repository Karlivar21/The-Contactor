import React from 'react'
import { View, Image, Text } from 'react-native'
import Proptypes from 'prop-types'
import styles from './styles'


const ContactThumbnail = ({ name, thumbnailPhoto}) => (
        <View style={styles.contact}>
            
            <Image style = {styles.image} source={{ uri: thumbnailPhoto }}/> 
            <Text style = {styles.name}>{name}</Text>
        </View>
)

ContactThumbnail.propTypes = {
  name: Proptypes.string.isRequired,
  thumbnailPhoto: Proptypes.string.isRequired
}

export default ContactThumbnail
