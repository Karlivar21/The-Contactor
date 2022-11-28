import { StyleSheet } from 'react-native'
import { graniteGray, white, green } from '../../styles/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: green,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  logo: {
    width: 250,
    height: 240

  },

  paragraph: {
    textAlign: 'center',
    color: white,
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
    borderWidth: 2,
    backgroundColor: graniteGray

  }
})
