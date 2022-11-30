import React, { useState } from 'react'
import { View, Text, TouchableHighlight, TextInput } from 'react-native'
import styles from './styles'

export default function Toolbar ({ onAdd, input, setInput, importContact }) {
  return (
    <View style={styles.container}>
        <View style={styles.search}>
        <TextInput style={styles.input} placeholder="search" value={input} onChangeText={(text) => setInput(text)}/>
        </View>
        <TouchableHighlight onPress={() => importContact()} style={styles.button}>
            <Text style={styles.buttonText}>Import</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => onAdd()}>
            <Text style={styles.plus}>+</Text>
        </TouchableHighlight>
    </View>

  )
};
