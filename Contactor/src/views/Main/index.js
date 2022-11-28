import React from 'react'
import { View, Text, TouchableHighlight, Image } from 'react-native'
import styles from './styles'
import logo from '../../resources/logo.png'

const Main = ({ navigation: { navigate } }) => (
        <View style={styles.container}>
            <Text style={styles.paragraph}>The Contactor</Text>
            <Image style={styles.logo} source={logo}/>
            <TouchableHighlight
                onPress={() => navigate('Contacts')}
                style={styles.button}>
                <Text style={styles.Text}>Contacts</Text>
            </TouchableHighlight>
        </View>
)

export default Main
