import React from 'react'
import { View, Text, TouchableHighlight, TouchableOpacity, TextInput, Image } from 'react-native'
import styles from './styles'
import { Formik } from 'formik'
import NativeModal from 'react-native-modal'
import { AntDesign } from '@expo/vector-icons'

export default function EditModal ({ visible, closeModal, editContact, addPhoto, name, image, phoneNumber, isSelected }) {
  return (
        <Formik
            initialValues={{ name: '', phoneNumber: '', thumbnailPhoto: '' }}
            onSubmit={values => { editContact(values) }}>
    {({ handleChange, handleBlur, handleSubmit, values }) => (
    <NativeModal visible={visible} animationType="slide" onRequestClose={closeModal}>
        <View style={styles.container}>
            <View style={styles.top}>
                <TouchableHighlight onPress={closeModal}>
                    <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableHighlight>
            <Text style={styles.title}>Edit Contact</Text>
            <TouchableHighlight onPress={handleSubmit}>
                <Text style={styles.buttonText}>Done</Text>
            </TouchableHighlight>
            </View>
            {
                isSelected
                  ? <Image style = {styles.image} source={{ uri: image }}/>
                  : <View style={styles.circle}>
                <AntDesign name="user" style={styles.user}/>
                </View>
            }

            <TouchableOpacity
                onPress={() => addPhoto()}>
                    <Text style={styles.buttonText}>
                        Change Photo
                </Text>
            </TouchableOpacity>
            <TextInput style={styles.input}
            placeholder={name}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}/>
            <TextInput style={styles.input}
            placeholder={phoneNumber}
            onChangeText={handleChange('phoneNumber')}
            onBlur={handleBlur('phoneNumber')}
            value={values.phoneNumber}/>

        </View>
    </NativeModal>
    )}
    </Formik>
  )
};
