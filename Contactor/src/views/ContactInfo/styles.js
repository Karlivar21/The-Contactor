import { StyleSheet } from 'react-native'
import { lightGray, cucumber, green, dell, blue, red, rose, black } from '../../styles/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cucumber
  },
  contact: {
    paddingTop: 20,
    flexDirection: 'column',
    backgroundColor: cucumber,
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
    fontSize: 40,
    paddingTop: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  },

  edit: {
    fontSize: 20,
    color: blue,
    padding: 5,
    marginTop: 20,
  },

  number: {
    borderRadius: 13,
    backgroundColor: rose,
    padding: 10,
    marginTop: 20,
    width: '90%',
    height: 50,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 3
  },

  phone: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },

  phoneIcon: {
    fontSize: 40,
    color: rose,
    textAlign: 'center',
  },

  button: {
    marginTop: 20,
    justifyContent: 'center',
    width: '90%',
    height: 50,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: green,
    borderRadius: 13
  },

  button2: {
    marginTop: 80,
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
