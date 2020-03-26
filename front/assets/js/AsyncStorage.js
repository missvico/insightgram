import { AsyncStorage } from "react-native";

export const setItemStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log("Fallo al guardar");
  }
};

export const getItemStorage = async key => {
  try {
    const value = await AsyncStorage.getItem(key);

    if (value !== null) {
      return value;
    } else {
      console.log("No hay datos");
    }
  } catch (error) {
    console.log("Fallo al buscar");
  }
};
