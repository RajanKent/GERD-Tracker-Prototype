import * as React from 'react';
import { SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';

import { Text, View } from '../../components/Themed';
import { MonoText } from '../../components/StyledText';
import { PSQI_QUES_1_3, PSQI_QUES_5, PSQI_QUES_6_9 } from './constants';
import styles from './styles';

export default function PSQIScreen() {

  const renderQues1_3 = () => {
    return PSQI_QUES_1_3.map((item) => {
      return (
        <View key={item.id} style={styles.questionContainer}>
          <View style={styles.questionLabel}>
            <MonoText style={styles.questionLabelText}>{`${item.id}. ${item.ques}`}</MonoText>
          </View>
          {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
          <View style={styles.answerWrapper}>
            <TextInput
              multiline={true}
              style={styles.textInput}
            />
          </View>
        </View>
      )
    });
  }

  const renderQues6_9 = () => {
    return PSQI_QUES_6_9.map((item) => {
      return (
        <View key={item.id} style={styles.questionContainer}>
          <View style={styles.questionLabel}>
            <MonoText style={styles.questionLabelText}>{`${item.id}. ${item.ques}`}</MonoText>
          </View>
          {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
          <View style={styles.answerWrapper}>
            <TextInput
              multiline={true}
              style={styles.textInput}
            />
          </View>
        </View>
      )
    });
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          {renderQues1_3()}
          {renderQues6_9()}
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => null}
          >
            <MonoText style={styles.buttonLabel}>Submit</MonoText>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
