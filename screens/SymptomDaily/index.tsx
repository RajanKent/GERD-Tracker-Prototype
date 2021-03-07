import * as React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

import { CheckBox } from 'react-native-elements'
import { Text, View } from '../../components/Themed';
import { MonoText } from '../../components/StyledText';
import { SYMPTOMS_LIST, SEVERITY_SCALE_OPTIONS } from './constants';
import styles from './style';

export default function SymptomsDaily() {

  const startDate = moment();
  const getSymptomRecordDays = () => {
    const days = [];
    let day = 0, len = 7;
    while (day < len) {
      days.push(moment(moment(startDate).add(day, 'days')).format('LL'));
      day++;
    }
    return days;
  }

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

  const renderDayList = () => {
    const symptomRecordDays = getSymptomRecordDays();
    const symptomList = getSymptomList();

    return symptomRecordDays.map((dayItem, index) => {
      const isActive = true;
      return (
        <View key={dayItem + index}>
          <View style={[styles.listItemContainer, isActive ? styles.listItemContainerActive : styles.listItemContainerInActive]}>
            <View style={styles.listItemLeft}>
              <MonoText style={styles.listItemTitle}>Day #{index + 1}: {dayItem}</MonoText>
            </View>
            <View style={styles.listItemRight}>
              <Ionicons name={isActive ? 'ios-chevron-up-outline' : 'ios-chevron-down-outline'} size={24} color="#9e9Da1" />
            </View>
          </View>
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
                      return (
                        <View key={ele.severity + index} style={styles.optionLabelWrapper}>
                          <CheckBox
                            checked={ele.isSelected}
                            containerStyle={styles.checkboxContainer}
                          // checkedColor={'#1FD7AE'}
                          />
                          <MonoText style={styles.optionLabel}>{ele.severity}</MonoText>
                        </View>
                      );
                    })}
                  </View>
                </View>
              );
            })
          }
        </View>
      );
    });
  };


  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <MonoText style={styles.headerText}>Good Morning!, Rajan</MonoText>
      </View>
      <View style={styles.subContainer}>
        <MonoText style={styles.title}>Symptom Daily</MonoText>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.7)" />
        <View style={styles.startDateContainer}>
          <MonoText style={styles.startDateText}>Start Date: {moment(startDate).format('LLLL')}</MonoText>
        </View>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.7)" />
        <ScrollView style={styles.listItemWrapper}>

          {
            renderDayList()
          }

          <TouchableOpacity style={styles.buttonContainer}>
            <MonoText style={styles.buttonLabel}>Submit</MonoText>
          </TouchableOpacity>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
