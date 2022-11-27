import { StyleSheet } from 'react-native';
import { darkerBlue, gray, white} from "../../styles/colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        height: 80,
        backgroundColor: gray
    },
    search: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 150,
        backgroundColor: white,
        borderRadius: 8,
        
    },

    input: {
        paddingRigth: 40,
    },

    plus: {
        paddingLeft: 150,
        fontSize: 30,
        color: 'white',
        paddingRigth: 40,
    },

});

export default styles;