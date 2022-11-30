import React from 'react'
import { View, FlatList, Text, TouchableOpacity, TouchableHighlight} from 'react-native'
import PropTypes from 'prop-types'
import ContactThumbnail from '../contactthumbnail'
import styles from './styles'

export default function ContactsList ({ input, contacts, navigation: { navigate }, setInput,}) {

  return (
  <FlatList
      style={{ flex: 1, paddingTop: 15 }}
      data={contacts}
      renderItem={({ item }) => {
        if (input === '') {
          return (
          <TouchableOpacity onPress={() => navigate('ContactInfo', item)}>
          <ContactThumbnail
              name={item.name}
              thumbnailPhoto={item.thumbnailPhoto}
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
