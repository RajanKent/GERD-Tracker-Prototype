import * as React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import moment from 'moment';

import { CheckBox } from 'react-native-elements'
import { Text, View } from '../../components/Themed';
import { MonoText } from '../../components/StyledText';
import { SEVERITY_SCALE_OPTIONS } from './constants';
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

  const renderDayList = () => {
    const symptomRecordDays = getSymptomRecordDays();
    return symptomRecordDays.map((dayItem, index) => {
      return (
        <View key={dayItem + index}>
          <View style={styles.listItemContainer}>
            <MonoText style={styles.listItemTitle}>Day #{index + 1}: {dayItem}</MonoText>
          </View>
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
        <View style={styles.separator} lightColor="#eee" darkColor="#eee" />
        {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
        <View style={styles.startDateContainer}>
          <MonoText style={styles.startDateText}>Start Date: {moment(startDate).format('LLLL')}</MonoText>
        </View>
        <View style={styles.separator} lightColor="#eee" darkColor="#eee" />
        <ScrollView style={styles.listItemWrapper}>

          {
            renderDayList()
          }

          {
            false &&
            <>
              <View style={styles.optionListWrapper}>
                <View style={styles.optionItemLabelContainer}>
                  <MonoText style={styles.optionItemLabel}>1. Day time Heartburn</MonoText>
                </View>
                <View style={styles.optionContainer}>
                  <View style={styles.optionLabelWrapper}>
                    <CheckBox
                      checked={true}
                    />
                    <MonoText style={styles.optionLabel}>MILD</MonoText>
                  </View>
                  <View style={[styles.optionLabelWrapper, styles.optionLabelWrapperSelected]}>
                    <CheckBox
                      checked={false}
                    />
                    <MonoText style={[styles.optionLabel, styles.optionLabelSelected]}>MODERATE</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <CheckBox
                      checked={false}
                    />
                    <MonoText style={styles.optionLabel}>SEVERE</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <CheckBox
                      checked={false}
                    />
                    <MonoText style={styles.optionLabel}>DISABLING</MonoText>
                  </View>
                </View>
              </View>

              <View style={styles.optionListWrapper}>
                <View style={styles.optionItemLabelContainer}>
                  <MonoText style={styles.optionItemLabel}>2. Night time Heartburn</MonoText>
                </View>
                <View style={styles.optionContainer}>
                  <View style={styles.optionLabelWrapper}>
                    <CheckBox
                      checked={false}
                    />
                    <MonoText style={styles.optionLabel}>MILD</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <CheckBox
                      checked={false}
                    />
                    <MonoText style={styles.optionLabel}>MODERATE</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <CheckBox
                      checked={true}
                    />
                    <MonoText style={styles.optionLabel}>SEVERE</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <CheckBox
                      checked={false}
                    />
                    <MonoText style={styles.optionLabel}>DISABLING</MonoText>
                  </View>
                </View>
              </View>

              <View style={styles.optionListWrapper}>
                <View style={styles.optionItemLabelContainer}>
                  <MonoText style={styles.optionItemLabel}>3. Painful Swallowing</MonoText>
                </View>
                <View style={styles.optionContainer}>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>MILD</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>MODERATE</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>SEVERE</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>DISABLING</MonoText>
                  </View>
                </View>
              </View>

              <View style={styles.optionListWrapper}>
                <View style={styles.optionItemLabelContainer}>
                  <MonoText style={styles.optionItemLabel}>4. Difficulty Swallowing</MonoText>
                </View>
                <View style={styles.optionContainer}>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>MILD</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>MODERATE</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>SEVERE</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>DISABLING</MonoText>
                  </View>
                </View>
              </View>

              <View style={styles.optionListWrapper}>
                <View style={styles.optionItemLabelContainer}>
                  <MonoText style={styles.optionItemLabel}>5. Bad tasting fluid coming up into mouth</MonoText>
                </View>
                <View style={styles.optionContainer}>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>MILD</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>MODERATE</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>SEVERE</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>DISABLING</MonoText>
                  </View>
                </View>
              </View>

              <View style={styles.optionListWrapper}>
                <View style={styles.optionItemLabelContainer}>
                  <MonoText style={styles.optionItemLabel}>6. Chest Pain</MonoText>
                </View>
                <View style={styles.optionContainer}>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>MILD</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>MODERATE</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>SEVERE</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>DISABLING</MonoText>
                  </View>
                </View>
              </View>
            </>
          }

          {/* List item */}
          {/* <View style={styles.listItemContainer}>
            <MonoText style={styles.listItemTitle}>Day #1: Mar 1, 2021</MonoText>
          </View> */}

          {
            false &&
            <>
              <View style={styles.optionListWrapper}>
                <View style={styles.optionItemLabelContainer}>
                  <MonoText style={styles.optionItemLabel}>1. Day time Heartburn</MonoText>
                </View>
                <View style={styles.optionContainer}>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>MILD</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>MODERATE</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>SEVERE</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>DISABLING</MonoText>
                  </View>
                </View>
              </View>

              <View style={styles.optionListWrapper}>
                <View style={styles.optionItemLabelContainer}>
                  <MonoText style={styles.optionItemLabel}>2. Night time Heartburn</MonoText>
                </View>
                <View style={styles.optionContainer}>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>MILD</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>MODERATE</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>SEVERE</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>DISABLING</MonoText>
                  </View>
                </View>
              </View>

              <View style={styles.optionListWrapper}>
                <View style={styles.optionItemLabelContainer}>
                  <MonoText style={styles.optionItemLabel}>3. Painful Swallowing</MonoText>
                </View>
                <View style={styles.optionContainer}>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>MILD</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>MODERATE</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>SEVERE</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>DISABLING</MonoText>
                  </View>
                </View>
              </View>

              <View style={styles.optionListWrapper}>
                <View style={styles.optionItemLabelContainer}>
                  <MonoText style={styles.optionItemLabel}>4. Difficulty Swallowing</MonoText>
                </View>
                <View style={styles.optionContainer}>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>MILD</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>MODERATE</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>SEVERE</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>DISABLING</MonoText>
                  </View>
                </View>
              </View>

              <View style={styles.optionListWrapper}>
                <View style={styles.optionItemLabelContainer}>
                  <MonoText style={styles.optionItemLabel}>5. Bad tasting fluid coming up into mouth</MonoText>
                </View>
                <View style={styles.optionContainer}>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>MILD</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>MODERATE</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>SEVERE</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>DISABLING</MonoText>
                  </View>
                </View>
              </View>

              <View style={styles.optionListWrapper}>
                <View style={styles.optionItemLabelContainer}>
                  <MonoText style={styles.optionItemLabel}>6. Chest Pain</MonoText>
                </View>
                <View style={styles.optionContainer}>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>MILD</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>MODERATE</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>SEVERE</MonoText>
                  </View>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>DISABLING</MonoText>
                  </View>
                </View>
              </View>
            </>
          }

          <TouchableOpacity style={styles.buttonContainer}>
            <MonoText style={styles.buttonLabel}>Submit</MonoText>
          </TouchableOpacity>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
