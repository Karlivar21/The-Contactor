import React from 'react'
import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import ContactThumbnail from '../contactthumbnail'

export default function ContactsList ({ input, contacts, navigation: { navigate }, setInput }) {
console.log(contacts)

  return (
  <FlatList
      style={{ flex: 1, paddingTop: 15 }}
      data={contacts}
      renderItem={({ item }) => {
        console.log(contacts)
        if (input === '') {
          return (
          <TouchableOpacity onPress={() => navigate('ContactInfo', item)}>
          <ContactThumbnail
              name={item.name}
              imageURI={item.thumbnailPhoto}
              />
          </TouchableOpacity>
          )
        }
        if (item.name.toLowerCase().includes(input.toLowerCase())) {
          return (
            <TouchableOpacity onPress={() => navigate('ContactInfo', item)}>
              <ContactThumbnail
                name={item.name}
                imageURI={item.thumbnailPhoto}
                />

            </TouchableOpacity> 
          )
        }
      }
      }
      keyExtractor={contact => contact.id}
  />
  )
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
    imageURI: PropTypes.string
  })),
  navigation: PropTypes.object.isRequired
}
