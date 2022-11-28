import React from "react";
import { View, Text, TouchableHighlight, TouchableOpacity, TextInput, Modal, Image} from "react-native";
import styles from "./styles";
import { Formik } from 'formik'
import NativeModal from 'react-native-modal';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function AddModal ({visible, closeModal, addContact, addPhoto, photo, isSelected}) {
    console.log(isSelected)
    return (
        <Formik 
            initialValues={{name: '', phoneNumber: '', imageURI: ''}}
            onSubmit={values => {addContact(values)}}>
    {({handleChange, handleBlur, handleSubmit, values}) => (
    <NativeModal visible={visible} animationType="slide" onRequestClose={closeModal}>
        <View style={styles.container}>
            <View style={styles.top}>
                <TouchableHighlight onPress={closeModal}>
                    <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableHighlight>
            <Text style={styles.title}>Add Contact</Text>
            <TouchableHighlight onPress={handleSubmit}>
                <Text style={styles.buttonText}>Done</Text>
            </TouchableHighlight>   
            </View>
            {
                isSelected 
                ? 
                <Image style = {styles.image} source={{uri:photo}}/>
                :
                <View style={styles.circle}>
                <AntDesign name="user" style={styles.user}/>
                </View> 
            }
            
            <TouchableOpacity
                onPress={() => addPhoto()}>
                    <Text style={styles.buttonText}>
                        Add Photo
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
            
        </View>
    </NativeModal>
    )}
    </Formik>
    )};