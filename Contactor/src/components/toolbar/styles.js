import { Button, StyleSheet } from 'react-native'
import { darkerBlue, gray, white } from '../../styles/colors'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    height: 80,
    width: '100%',
    backgroundColor: gray
  },
  search: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: '80%',
    backgroundColor: white,
    borderRadius: 8

  },

  input: {
    paddingRigth: 40
  },

  plus: {
    marginLeft: 30,
    paddingBottom: 65,
    fontSize: 50,
    color: 'white',
  },

  button: { 
    fontSize: 20,
    color: 'white',
    padding: 10
    },

    buttonText: {
        fontSize: 20,
        color: 'white',
        padding: 10
    }

})

export default styles
