import * as React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { MonoText } from '../components/StyledText';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <MonoText style={styles.headerText}>Good Morning!, Rajan</MonoText>
        <MonoText style={styles.headerTime}>Mar 6, 2021 5:00 PM</MonoText>
      </View>
      <View style={styles.subContainer}>
        <MonoText style={styles.title}>Symptom Daily</MonoText>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.startDateContainer}>
          <MonoText style={styles.startDateText}>Start Date: Mar 1, 2021 10:00 PM</MonoText>
        </View>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <ScrollView style={styles.listItemWrapper}>

          {/* List item */}
          <View style={styles.listItemContainer}>
            <MonoText style={styles.listItemTitle}>Day #1: Mar 1, 2021</MonoText>
          </View>

          {
            true &&
            <>
              <View style={styles.optionListWrapper}>
                <View style={styles.optionItemLabelContainer}>
                  <MonoText style={styles.optionItemLabel}>1. Day time Heartburn</MonoText>
                </View>
                <View style={styles.optionContainer}>
                  <View style={styles.optionLabelWrapper}>
                    <MonoText style={styles.optionLabel}>MILD</MonoText>
                  </View>
                  <View style={[styles.optionLabelWrapper, styles.optionLabelWrapperSelected]}>
                    <MonoText style={[styles.optionLabel, styles.optionLabelSelected]}>MODERATE</MonoText>
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

          {/* List item */}
          <View style={styles.listItemContainer}>
            <MonoText style={styles.listItemTitle}>Day #1: Mar 1, 2021</MonoText>
          </View>

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
        {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#4287f5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerContainer: {
    backgroundColor: '#4287f5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white'
  },
  headerTime: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white'
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '97%',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  startDateContainer: {
    padding: 10,
    width: '97%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'gray',
  },
  startDateText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
  listItemWrapper: {
    width: '100%',
    marginTop: 10,
    // marginVertical: 10,
    // marginBottom: 20,
    paddingHorizontal: 10,
  },
  listItemContainer: {
    backgroundColor: '#ededed',
    // backgroundColor: 'rgba(66, 135, 245, 0.2)',
    // borderTopRightRadius: 20,
    // borderTopLeftRadius: 20,
    borderRadius: 20,
    marginTop: 10,
    padding: 20,
  },
  listItemTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  optionListWrapper: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ededed'
  },
  optionItemLabelContainer: {
    borderBottomWidth: 1,
    borderColor: '#ededed'
  },
  optionItemLabel: {
    paddingBottom: 10
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingVertical: 10,
  },
  optionLabelWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: 'white',
  },
  optionLabelWrapperSelected: {
    backgroundColor: '#4287f5'
  },
  optionLabel: {},
  optionLabelSelected: {
    color: 'white'
  },
  buttonContainer: {
    padding: 20,
    backgroundColor: '#4287f5',
    borderRadius: 20,
    marginVertical: 30,
  },
  buttonLabel: {
    color: 'white',
    textAlign: 'center'
  }
});
