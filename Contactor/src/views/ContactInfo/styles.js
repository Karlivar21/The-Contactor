import { StyleSheet } from 'react-native'
import { lightGray, black, green, white, blue, red} from '../../styles/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightGray
  },
  contact: {
    paddingTop: 20,
    flexDirection: 'column',
    backgroundColor: lightGray,
    alignItems: 'center',
    justifyContent: 'center'
  },

  image: {
    padding: 20,
    width: 150,
    height: 150,
    borderRadius: 80,
    backgroundColor: 'lightgrey'
  },

  name: {
    fontSize: 30,
    paddingTop: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  },

  edit: {
    fontSize: 20,
    color: blue,
    padding: 20
  },

  number: {
    marginHorizontal: 30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: lightGray,
    padding: 10
  },

  phone: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center'
  },

  button: {
    marginHorizontal: 30,
    justifyContent: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: green,
    borderRadius: 8
  },

  button2: {
    marginHorizontal: 30,
    justifyContent: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: red,
    borderRadius: 8
  },

  buttonText: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10
  }

})
