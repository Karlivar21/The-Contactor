import React from 'react'
import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import ContactThumbnail from '../contactthumbnail'

const ContactsList = ({ contacts, navigation: { navigate } }) => (
        <FlatList
            style={{ flex: 1, paddingTop: 15 }}
            data={contacts}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigate('ContactInfo', item)}>
                <ContactThumbnail
                    name={item.name}
                    imageURI={item.thumbnailPhoto}/>
                </TouchableOpacity>
            )}
            keyExtractor={contact => contact.id}
        />
)

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
    imageURI: PropTypes.string
  })),
  navigation: PropTypes.object.isRequired
}

export default ContactsList
