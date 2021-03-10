import * as React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

import { CheckBox } from 'react-native-elements'
import { Text, View } from '../../components/Themed';
import { MonoText } from '../../components/StyledText';
import { SYMPTOMS_LIST, SEVERITY_SCALE_OPTIONS } from './constants';
import styles from './style';

export default function SymptomsDaily() {

  const startDate = moment();

  const getSymptomList = () => {
    const symptoms: object[] = [];
    const getSeverityScale = () => {
      const severityScale: object[] = [];
      SEVERITY_SCALE_OPTIONS.forEach((item) => {
        severityScale.push({
          severity: item,
          isSelected: false
        })
      });
      return severityScale;
    }

    SYMPTOMS_LIST.forEach((item) => {
      symptoms.push({
        symptom: item,
        severityScale: getSeverityScale()
      });
    });

    return symptoms;
  }

  const renderSymptoms = () => {
    const symptomList = getSymptomList();

    return (
      <>
        {/* Symptom list */}
        {
          symptomList.map((item, index) => {
            return (
              <View key={item.symptom + index} style={styles.optionListWrapper}>
                <View style={styles.optionItemLabelContainer}>
                  <MonoText style={styles.optionItemLabel}>{`${index + 1}. ${item.symptom}`}</MonoText>
                </View>
                {/* Severity scale options*/}
                <View style={styles.optionContainer}>
                  {item.severityScale?.length && item.severityScale.map((ele, index) => {
                    if (index === 1) {
                      ele.isSelected = true;
                    }
                    const getLabelBackground = () => {
                      index++;
                      return {
                        backgroundColor: `rgba(207, 116, 116, ${0.3 * index / 1.5} )`
                      }
                    };

                    console.log(getLabelBackground())
                    return (
                      <View key={ele.severity + index} style={[styles.optionWrapper]}>
                        <CheckBox
                          checked={ele.isSelected}
                          containerStyle={styles.checkboxContainer}
                        // checkedColor={'#1FD7AE'}
                        />
                        <View style={[styles.optionLabelWrapper, getLabelBackground()]}>
                          <MonoText style={[styles.optionLabel]}>{ele.severity}</MonoText>
                        </View>
                      </View>
                    );
                  })}
                </View>
              </View>
            );
          })
        }
      </>
    )
  };


  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <MonoText style={styles.headerText}>Good Morning!, Rajan</MonoText>
      </View>
      <View style={styles.subContainer}>
        <MonoText style={styles.title}>Symptoms Daily</MonoText>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.7)" />
        {/* <View style={styles.startDateContainer}>
          <MonoText style={styles.startDateText}>Start Date: {moment(startDate).format('LLL')}</MonoText>
        </View> */}
        {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.7)" /> */}
        <View style={styles.mainContent}>
          <View style={[styles.listItemContainer]}>
            <TouchableOpacity style={styles.listItemLeft}>
              <MaterialIcons name={'arrow-back-ios'} size={22} color="#979797" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItemMiddle}>
              <MonoText style={styles.listItemTitle}>{moment(startDate).format('LL')}</MonoText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItemRight}>
              <MaterialIcons name={'arrow-forward-ios'} size={22} color="#979797" />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.listItemWrapper}>
            {renderSymptoms()}
            <TouchableOpacity style={styles.buttonContainer}>
              <MonoText style={styles.buttonLabel}>Submit</MonoText>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
