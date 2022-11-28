import { StyleSheet } from 'react-native'
import { lightGray, gray, white, black, blue } from '../../styles/colors'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: lightGray,
        height: 500,
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
    circle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'gray',
        alignItems: 'center',
    },

    top: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        paddingLeft: 20,
        borderBottomColor: 'black',
        width: 350,
    },
   
    icon: {
        fontSize: 20,
        borderRadius: 10,
        borderWidth: 2,

        borderColor: 'black',
      },

    user: {
        color: white,
        fontSize: 80,
        position: 'absolute',
        top: 19,
        left: 10,
    },

    input: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: white,
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },


    text: {
        paddingBottom: 15,
        fontSize: 20,
        color: white,
        fontWeight: 'bold',
    },

    buttonText: {
        fontSize: 15,
        color: blue,
        paddingTop: 10,
        paddingBottom: 10,
    },

    button: {
        justifyContent: 'center',
        paddingRight: 10,
        paddingLeft: 10,
        borderColor: white,
        borderWidth: 2,
        backgroundColor: gray,
    },

    image:{
        width:100,
        height:100,
        borderRadius:50,
        backgroundColor:'lightgrey',
    },

    
});

  

export default styles
