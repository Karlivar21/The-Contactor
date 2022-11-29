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

  // Adding unique ID to filename and taking out icelandic letters
  filename = latinize(filename) + "-" + uuidv4()

  filename = filename.split('-')
  filename = filename[0] + '-' + filename[1] + '.json'
  // File path + contactname + uuid
  filename = Directory + filename
  return filename;
}

export const addContact = async contact => {
  // call helper function to create filename
  fileName = createFileName(contact)
  

  // Check it directory exist
  await setupDirectory()

  // create file
  await FileSystem.writeAsStringAsync(fileName, JSON.stringify(contact))

  // return ID so that it can be used to identify each contact
  const data = fileName.split("/")
  const newdata = data[data.length - 1]
  const id = newdata.split(".")[0]
  return id
}

export const editContact = async (contact, newcontact) => {
    let fileName = Directory + latinize(contact.name.replace(/\s/g, '')) + '-' + contact.id + '.json'// replace whitespace
  await FileSystem.deleteAsync(fileName);
  await addContact(newcontact);
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
