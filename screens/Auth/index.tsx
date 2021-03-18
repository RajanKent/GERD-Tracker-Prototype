import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Image,
  Alert,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { View } from '../../components/Themed';
import { MonoText } from '../../components/StyledText';
import { STORAGE_CONSTANTS } from '../../constants/storage';
import { storageService } from '../../utils/storage';
import { changeStack } from '../../navigation/navigation.service';
import styles from './styles';

export default function Authentication() {
  const [username, setUsername] = React.useState('');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            style={{
              width: '100%',
              height: '100%',
              marginTop: '30%',
              backgroundColor: 'transparent',
            }}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <KeyboardAvoidingView
              behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
              style={styles.container}
            >
              <Image
                style={styles.imageWrapper}
                source={require('../../assets/images/gred.jpeg')}
              />
              <MonoText style={styles.title}>GERD Symptom</MonoText>
              <MonoText style={styles.subTitle}>Tracker</MonoText>

              <View style={styles.inputForm}>
                <MonoText>Username</MonoText>
                <TextInput
                  value={username}
                  style={styles.textInput}
                  onChangeText={setUsername}
                />
              </View>
              <TouchableOpacity
                style={styles.buttonContainerLogin}
                onPress={async () => {
                  if (username) {
                    await storageService.saveItem(
                      STORAGE_CONSTANTS.USER_NAME_KEY,
                      username
                    );
                    changeStack('Root');
                  } else {
                    Alert.alert('Login Error!', 'Please enter valid username.');
                  }
                }}
              >
                <MonoText style={styles.buttonLabel}>Login</MonoText>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonContainerRegister}
                onPress={() => null}
              >
                <MonoText style={styles.buttonLabelRegister}>Register</MonoText>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </ScrollView>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
}
