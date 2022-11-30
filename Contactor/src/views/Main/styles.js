import { StyleSheet } from 'react-native'
import { rose, white, green, black, dell, cucumber } from '../../styles/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: rose,
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
    color: cucumber,
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
    color: cucumber,
    fontSize: 20,
    fontWeight: 'bold'
    }
})
