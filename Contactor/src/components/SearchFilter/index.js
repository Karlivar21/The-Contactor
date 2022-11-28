import React from 'react'
import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native'
import styles from './styles'

export default function SearchFilter ({ contacts, input, setInput, navigation: { navigate } }) {
  return (
        <View style={styles.searchFilter}>
            <FlatList data = {contacts} renderItem = {({ item }) => {
              if (input === '') {
                  return (null)
              }  
              if (item.name.toLowerCase().includes(input.toLowerCase())) {
                return (
                        <View>
                            <TouchableOpacity onPress={() => navigate('ContactInfo', item)}>
                                <Text>{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                )
              }
            }} />

        </View>
  )
}
