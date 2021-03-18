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
  PSQI_QUES_1_4,
  PSQI_QUES_5_HEADER,
  PSQI_QUES_5,
  PSQI_QUES_6_9
} from './constants'
import styles from './styles'

export default function PSQIScreen () {
  const [psqi_1_4, onChangePSQI_QUES_1_4] = React.useState(PSQI_QUES_1_4)
  const [psqi_5, onChangePSQI_QUES_5] = React.useState(PSQI_QUES_5)
  const [psqi_6_9, onChangePSQI_QUES_6_9] = React.useState(PSQI_QUES_6_9)

  const _handleOnChange_1_4 = (item, value) => {
    const updatedPSQI = psqi_1_4.map(obj => {
      if (obj?.id === item.id) {
        obj.value = value
      }
      return obj
    })

    onChangePSQI_QUES_1_4(updatedPSQI)
  }

  const _handleOnChange5 = (item, value) => {
    const updatedPSQI = psqi_5.map(obj => {
      if (obj?.id === item.id) {
        if (obj.value === value) {
          obj.value = null
        } else {
          obj.value = value
        }
      }
      return obj
    })
    onChangePSQI_QUES_5(updatedPSQI)
  }

  const renderQues1_4 = () => {
    return psqi_1_4?.map(item => {
      return (
        <View key={item.id} style={styles.questionContainer}>
          <View style={styles.questionLabel}>
            <MonoText
              style={styles.questionLabelText}
            >{`${item.id}. ${item.ques}`}</MonoText>
          </View>
          <View style={styles.answerWrapper}>
            <TextInput
              value={item.ans}
              onChangeText={text => _handleOnChange_1_4(item, text)}
              multiline={true}
              style={styles.textInput}
            />
          </View>
        </View>
      )
    })
  }

  const renderQues5 = () => {
    return (
      <View>
        <MonoText style={styles.questionHeader}>
          {`5. ${PSQI_QUES_5_HEADER.header}`}
        </MonoText>
        {psqi_5.map(item => {
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
                {PSQI_QUES_5_HEADER.scale.map((opt, index) => (
                  <View key={opt + index} style={styles.optionWrapper}>
                    <CheckBox
                      checked={item.value === opt.value}
                      onPress={() => _handleOnChange5(item, opt.value)}
                    />
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
    return psqi_6_9.map(item => {
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
          {renderQues1_4()}
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
