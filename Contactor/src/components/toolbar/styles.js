import { Button, StyleSheet } from 'react-native'
import { dell, gray, white } from '../../styles/colors'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    height: 80,
    width: '100%',
    backgroundColor: dell
  },
  search: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: '60%',
    backgroundColor: white,
    borderRadius: 8

  },

  input: {
    width: '100%',
    marginLeft: 40,
    fontSize: '20px'
  },

  plus: {
    marginLeft: 30,
    paddingBottom: 65,
    fontSize: 50,
    color: 'white'
  },

  button: {
    fontSize: 20,
    color: 'white',
    paddingLeft: 10
  },

  buttonText: {
    fontSize: 20,
    color: 'white',
    paddingLeft: 10
  }

})

export default styles
