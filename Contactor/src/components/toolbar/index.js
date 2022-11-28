import React from "react";
import { View, Text, TouchableHighlight, TextInput} from "react-native";
import styles from "./styles";



const Toolbar = ({onAdd}) => (
    <View style={styles.container}>
        <View style={styles.search}>
        <TextInput style={styles.input} placeholder="search"/>
        </View>
        <TouchableHighlight onPress={() => onAdd()}> 
            <Text style={styles.plus}>+</Text>
        </TouchableHighlight>
    </View>
);

export default Toolbar;
