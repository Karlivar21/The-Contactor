import React from 'react'
import { View, Image, Text } from 'react-native'
import Proptypes from 'prop-types'
import styles from './styles'

const ContactThumbnail = ({ name, imageURI }) => (
        <View style={styles.contact}>
            <Image style = {styles.image} source={{ uri: imageURI }}/>
            <Text style = {styles.name}>{name}</Text>
        </View>
)

ContactThumbnail.propTypes = {
  name: Proptypes.string.isRequired,
  imageURI: Proptypes.string.isRequired
}

export default ContactThumbnail