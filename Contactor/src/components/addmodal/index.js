import React from 'react'
import { View, Text, TouchableHighlight, TouchableOpacity, TextInput, Modal } from 'react-native'
import styles from './styles'
import { Formik } from 'formik'
import NativeModal from 'react-native-modal'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'

export default function AddModal ({ visible, closeModal, selectFromCameraRoll, addContact }) {
  return (
        <Formik
            initialValues={{ name: '', phoneNumber: '', imageURI: '' }}
            onSubmit={values => { addContact(values) }}>
    {({ handleChange, handleBlur, handleSubmit, values }) => (
    <NativeModal visible={visible} animationType="slide" onRequestClose={closeModal}>
        <View style={styles.container}>
            <View style={styles.icon}>
        <MaterialIcons style={styles.icon} name = 'close' onPress={closeModal}/>
        </View>
            <Text style={styles.title}>Add Contact</Text>
            <View style={styles.circle}>
                <AntDesign name="user" style={styles.user}/>
            </View>
            <TouchableOpacity
                >
                    <Text style={styles.text}>
                        Take Photo
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => selectFromCameraRoll()} >
                    <Text style={styles.text}>
                        Select photo from cameraroll
                </Text>
            </TouchableOpacity>
            <TextInput style={styles.input}
            placeholder="Name"
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}/>
            <TextInput style={styles.input}
            placeholder="Phone Number"
            onChangeText={handleChange('phoneNumber')}
            onBlur={handleBlur('phoneNumber')}
            value={values.phoneNumber}/>
            <TouchableHighlight style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>SUBMIT</Text>
            </TouchableHighlight>
        </View>
    </NativeModal>
    )}
    </Formik>
  )
};
