import * as FileSystem from 'expo-file-system'
import 'react-native-get-random-values'
import { v4 as uuidv4, v4 } from 'uuid'
import latinize from 'latinize'

const Directory = `${FileSystem.documentDirectory}contacts/`
console.log(Directory)
const onException = (cb, errorHandler) => {
  try {
    return cb()
  } catch (err) {
    if (errorHandler) {
      return errorHandler(err)
    }
    console.error(err)
  }
}

const createFileName = (contact) => {
  let filename = contact.name.replace(/\s/g, '') // replace whitespace
  filename = latinize(filename) + '-' + uuidv4()
  filename = filename.split('-')
  filename = filename[0] + '-' + filename[1] + '.json'
  filename = Directory + filename
  return filename
}

export const addContact = async contact => {
  fileName = createFileName(contact)
  await setupDirectory()
  await FileSystem.writeAsStringAsync(fileName, JSON.stringify(contact))
  const data = fileName.split('/')
  const newdata = data[data.length - 1]
  const id = newdata.split('.')[0]
  return id
}

export const editContact = async (contact, newcontact) => {
  const fileName = Directory + latinize(contact.name.replace(/\s/g, '')) + '-' + contact.id + '.json'// replace whitespace
  await FileSystem.deleteAsync(fileName)
  let id = await addContact(newcontact)
  id = id.split('-')[1]
  return id
}

export const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(Directory)
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(Directory)
  }
}

export const loadContact = async fileName => {
  return await onException(() => FileSystem.readAsStringAsync(`${Directory}/${fileName}`, {
    encoding: FileSystem.EncodingType.UTF8
  }))
}

export const deleteContact = async (contact) => {
  console.log(contact)
  const fileName = Directory + latinize(contact.name.replace(/\s/g, '')) + '-' + contact.id + '.json'
  await FileSystem.deleteAsync(fileName)
}

export const getAllContacts = async () => {
  await setupDirectory()
  const result = await onException(() => FileSystem.readDirectoryAsync(Directory))
  return Promise.all(result.map(async fileName => {
    return {
      name: fileName,
      type: 'contact',
      file: await loadContact(fileName)
    }
  }))
}
