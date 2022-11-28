import { StyleSheet } from 'react-native'
import { graniteGray, white, green, black } from '../../styles/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: green,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 150,
  },

  paragraph: {
    textAlign: 'center',
    color: black,
    fontSize: 50,
    fontWeight: 'bold'

  },

  button: {
    marginTop: 30,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
    borderColor: white,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: white
  },

  Text: {
    color: black,
    fontSize: 20,
    fontWeight: 'bold'
    }
})
