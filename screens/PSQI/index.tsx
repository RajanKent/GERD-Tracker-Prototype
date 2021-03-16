import * as React from 'react'
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { CheckBox } from 'react-native-elements'

import { View } from '../../components/Themed'
import { MonoText } from '../../components/StyledText'
import {
  PSQI_QUES_1_3,
  PSQI_QUES_4,
  PSQI_QUES_5,
  PSQI_QUES_6_9
} from './constants'
import styles from './styles'

export default function PSQIScreen () {
  const renderQues1_3 = () => {
    return PSQI_QUES_1_3.map(item => {
      return (
        <View key={item.id} style={styles.questionContainer}>
          <View style={styles.questionLabel}>
            <MonoText
              style={styles.questionLabelText}
            >{`${item.id}. ${item.ques}`}</MonoText>
          </View>
          {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
          <View style={styles.answerWrapper}>
            <TextInput multiline={true} style={styles.textInput} />
          </View>
        </View>
      )
    })
  }

  const renderQues4 = () => {
    return PSQI_QUES_4.map((item, index) => {
      return (
        <View key={item.id + index} style={styles.questionContainer}>
          <View style={styles.questionLabel}>
            <MonoText
              style={styles.questionLabelText}
            >{`${item.id}. ${item.ques}`}</MonoText>
          </View>
          {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
          <View style={styles.answerWrapper}>
            <TextInput multiline={true} style={styles.textInput} />
          </View>
        </View>
      )
    })
  }

  const renderQues5 = () => {
    return (
      <View>
        <MonoText style={styles.questionHeader}>
          {`5. ${PSQI_QUES_5.header.title}`}
        </MonoText>
        {PSQI_QUES_5.questions.map(item => {
          return (
            <View
              key={item.id}
              style={[styles.questionContainer, styles.questionSeparator]}
            >
              <View style={styles.questionLabel}>
                <MonoText
                  style={styles.questionLabelText}
                >{`${item.id}. ${item.ques}`}</MonoText>
              </View>
              <View style={[styles.answerWrapper, styles.extraContainer]}>
                {PSQI_QUES_5.header.scale.map(opt => (
                  <View style={styles.optionWrapper}>
                    <CheckBox checked={false} onPress={() => null} />
                    <MonoText>{opt.label}</MonoText>
                  </View>
                ))}
              </View>
            </View>
          )
        })}
      </View>
    )
  }

  const renderQues6_9 = () => {
    return PSQI_QUES_6_9.map(item => {
      return (
        <View key={item.id} style={styles.questionContainer}>
          <View style={styles.questionLabel}>
            <MonoText
              style={styles.questionLabelText}
            >{`${item.id}. ${item.ques}`}</MonoText>
          </View>
          {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
          <View style={styles.answerWrapper}>
            <TextInput multiline={true} style={styles.textInput} />
          </View>
        </View>
      )
    })
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          {renderQues1_3()}
          {renderQues4()}
          {renderQues5()}
          {renderQues6_9()}
          <TouchableOpacity style={styles.buttonContainer} onPress={() => null}>
            <MonoText style={styles.buttonLabel}>Submit</MonoText>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
