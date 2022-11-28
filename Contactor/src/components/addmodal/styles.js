import { StyleSheet } from 'react-native'
import { lightGray, gray, white, black, blue } from '../../styles/colors'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: black,
    height: 500,
    width: 350,
    borderRadius: 10
  },
  title: {
    paddingTop: 40,
    paddingBottom: 20,
    fontSize: 20,
    color: white,
    fontWeight: 'bold'

  },
  icon: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: lightGray,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },

  user: {
    color: white,
    fontSize: 80,
    position: 'absolute',
    top: 19,
    left: 10

  },

  circle: {
    paddingBottom: 20,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: gray
  },

  input: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: white
  },

  text: {
    paddingBottom: 15,
    fontSize: 20,
    color: white,
    fontWeight: 'bold'

  },

  button: {
    justifyContent: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: white,
    borderWidth: 2,
    backgroundColor: gray
  },

  buttonText: {
    fontSize: 20,
    color: blue,
    fontWeight: 'bold'

  }

})

export default styles
