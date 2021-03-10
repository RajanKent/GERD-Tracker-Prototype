import AsyncStorage from '@react-native-async-storage/async-storage';

const saveItem = (key: string, value: any) => {
  try {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // console.error('AsyncStorage error: ' + error.message);
  }
}

const multiSaveItem = (items: any) => {
  try {
    return AsyncStorage.multiSet(items);
  } catch (error) {
    // console.error('AsyncStorage error: ' + error);
  }
}

const getItemFromStore = async (key: string) => {
  try {
    return AsyncStorage.getItem(key);
  } catch (error) {
    // console.error('AsyncStorage error: ' + error.message);
  }
}

const removeItem = (key: string) => {
  try {
    return AsyncStorage.removeItem(key);
  } catch (error) {
    // console.error('AsyncStorage error: ' + error.message);
  }
}

const clearAll = () => {
  try {
    return AsyncStorage.clear()
  } catch (error) {
    // console.error('AsyncStorage error: ' + error);
  }
}

export const storageService: any = { saveItem, multiSaveItem, removeItem, clearAll, getItemFromStore };
