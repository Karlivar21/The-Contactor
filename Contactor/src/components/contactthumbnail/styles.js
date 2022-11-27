import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    contact:{
        paddingTop: 20,
        backgroundColor:'white',
        marginHorizontal: 15,
        marginBottom: 15,
        flex: 1,
        flexDirection:'row',
        padding: 15,
        alignItems:'center',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,

        elevation: 3,
    },
    image:{
        width:50,
        height:50,
        borderRadius:50,
        backgroundColor:'lightgrey',
    },
    name:{
        fontSize:20,
        marginLeft:15,
        fontWeight: '500',
    },
});

export default styles;