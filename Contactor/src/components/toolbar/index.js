import React, { useState } from "react";
import { View, Text, TouchableHighlight, TextInput} from "react-native";
import SearchFilter from '../SearchFilter'
import styles from "./styles";



export default function Toolbar ({onAdd, contacts, navigation}) { 

    const [input, setInput] = useState("")
    return ( 

    <View style={styles.container}>
        <View style={styles.search}>
        <TextInput style={styles.input} placeholder="search" value={input} onChangeText={(text) => setInput(text)}/>
        </View>
        <View><SearchFilter contacts={contacts} input={input} setInput={setInput} navigation={navigation} /></View>
        
        <TouchableHighlight onPress={() => onAdd()}> 
            <Text style={styles.plus}>+</Text>
        </TouchableHighlight>
    </View>
)};
