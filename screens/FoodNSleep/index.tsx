import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Platform,
  Alert,
  Image,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

import { MonoText } from '../../components/StyledText';
import { Text, View } from '../../components/Themed';
import { changeStack } from '../../navigation/navigation.service';
import { STORAGE_CONSTANTS } from '../../constants/storage';
import { storageService } from '../../utils/storage';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';

export default function FoodNSleep() {
  const [image, setImage] = React.useState(null);
  const [selectedImage, setSelectedImage] = React.useState('');

  React.useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          // await ImagePicker.requestMediaLibraryPermissionsAsync();
          await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert(
            'Permission!',
            'Sorry, we need camera  permissions to make this work!'
          );
        }
        await ImagePicker.requestCameraPermissionsAsync();
      }
    })();
  }, []);

  const _pickImage = async (selectImage) => {
    try {
      setImage(null);
      setSelectedImage(selectImage);
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    } catch (error) {
      setImage(null);
      Alert.alert('Error!', 'Sorry, Something went wrong!');
      // let result = await ImagePicker.launchImageLibraryAsync({
      //   mediaTypes: ImagePicker.MediaTypeOptions.All,
      //   allowsEditing: true,
      //   aspect: [4, 3],
      //   quality: 1,
      // });
      // if (!result.cancelled) {
      //   setImage(result.uri);
      // }
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollViewWrapper}
          contentContainerStyle={styles.scrollViewContainer}
        >
          {image && (
            <>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  source={{ uri: image }}
                  style={{ width: 200, height: 200 }}
                />
                <MonoText style={styles.picLabel}>
                  Recently uploaded {selectedImage}
                </MonoText>
              </View>
              <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.7)"
              />
            </>
          )}
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              _pickImage('breakfast');
            }}
          >
            <MaterialIcons name="add-a-photo" size={24} color="#fff" />
            <MonoText style={styles.buttonLabel}>Add Breakfast</MonoText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              _pickImage('lunch');
            }}
          >
            <MaterialIcons name="add-a-photo" size={24} color="#fff" />
            <MonoText style={styles.buttonLabel}>Add Lunch</MonoText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              _pickImage('dinner');
            }}
          >
            <MaterialIcons name="add-a-photo" size={24} color="#fff" />
            <MonoText style={styles.buttonLabel}>Add Dinner</MonoText>
          </TouchableOpacity>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.7)"
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              Alert.alert('Success!', 'Successfully saved the Bed time!');
            }}
          >
            <MaterialCommunityIcons name="sleep" size={24} color="#fff" />
            <MonoText style={styles.buttonLabel}>Go to Bed</MonoText>
          </TouchableOpacity>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.7)"
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={async () => {
              await storageService.clearAll();
              // await storageService.removeItem(STORAGE_CONSTANTS.USER_NAME_KEY);
              // const userName = await storageService.getItemFromStore(
              //   STORAGE_CONSTANTS.USER_NAME_KEY
              // );
              changeStack('Auth');
            }}
          >
            <SimpleLineIcons name="logout" size={24} color="#fff" />
            <MonoText style={styles.buttonLabel}>Logout</MonoText>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
