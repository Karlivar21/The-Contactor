import React from 'react'
import { View, Text, TouchableHighlight, TouchableOpacity, TextInput, Modal } from 'react-native'
import styles from './styles'
import NativeModal from 'react-native-modal'
import Entype from '@expo/vector-icons/Entypo'

export default function AddPhoto ({ visible, closeModal, takePhoto, selectFromCameraRoll }) {
  return (
    <NativeModal visible={visible} animationType="slide" onRequestClose={closeModal}>
        <View style={styles.container}>
        <View style={styles.top}>
                <TouchableHighlight onPress={closeModal}>
                    <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableHighlight>
            <Text style={styles.title}>Add Photo</Text>
            <TouchableHighlight onPress={closeModal}>
                <Text style={styles.buttonText}>Done</Text>
            </TouchableHighlight>
            </View>
        <TouchableOpacity
                onPress={() => takePhoto()} style={styles.button}>
                    <Entype name="camera" style={styles.icon}/>
                    <Text style={styles.text}>
                        Take Photo
                </Text>

            </TouchableOpacity>
        <TouchableOpacity
            onPress={() => selectFromCameraRoll()} style={styles.button}>
                <Entype name="image" style={styles.icon}/>
                <Text style={styles.text}>
                    Select photo from cameraroll
            </Text>

        </TouchableOpacity>
        </View>
    </NativeModal>
  )
}
