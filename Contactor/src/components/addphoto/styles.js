import { StyleSheet } from 'react-native';
import { lightGray, gray, white, black, blue} from "../../styles/colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: lightGray,
        height: 300,
        width: 350,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
    },
    title: {
        paddingTop: 30,
        paddingBottom: 20,
        paddingLeft: 45,
        paddingRight: 45,
        fontSize: 20,
        color: black,
        fontWeight: 'bold',
    },

    top: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        paddingLeft: 20,
        borderBottomColor: 'black',
        width: 350,
    }
    ,
   
    icon: {
        fontSize: 20,
      },

    text: {
        paddingBottom: 15,
        fontSize: 20,
        color: black,
        fontWeight: 'bold',
    
    },

    button: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
    },

    buttonText: {
        fontSize: 20,
        color: blue,
    }
    
});

export default styles;