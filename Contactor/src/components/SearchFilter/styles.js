import { StyleSheet } from 'react-native'
import { darkerBlue, gray, lightGray, red, white } from '../../styles/colors'

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
    width: '100%',
    backgroundColor: white,
    borderRadius: 8

  },

  input: {
    paddingRigth: 40
  },

  plus: {
    paddingLeft: 150,
    fontSize: 30,
    color: 'white',
    paddingRigth: 40
  },

  searchFilter: {
    flex: 1,
    backgroundColor: lightGray
  }

})

export default styles
