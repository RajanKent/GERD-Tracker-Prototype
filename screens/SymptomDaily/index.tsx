import * as React from 'react';
import { Alert, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements'
import { MaterialIcons } from '@expo/vector-icons';
import moment from 'moment';

import { Text, View } from '../../components/Themed';
import { MonoText } from '../../components/StyledText';
import { SYMPTOMS_LIST, SEVERITY_SCALE_OPTIONS } from './constants';
import { STORAGE_CONSTANTS } from '../../constants/storage';
import { STORAGE } from '../../utils/storage';
import { randomId } from '../../helpers';
import styles from './style';

export default function SymptomsDaily() {

  const [activeDay, setActiveDay] = React.useState(moment());
  const [startDate, setStartDate] = React.useState(moment());

  const [symptomList, setSymptomList] = React.useState(null);

  React.useEffect(() => {
    const getSymptomList = () => {
      const symptoms: any = [];
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

      SYMPTOMS_LIST.forEach((item, index) => {
        symptoms.push({
          symptomId: randomId() + index,
          symptom: item,
          severityScale: getSeverityScale()
        });
      });

      return symptoms;
    }
    setSymptomList(getSymptomList());
  }, [activeDay]);

  const _handleOnCheck = (selectedSymptom: object, selectedScale: string) => {
    const updatedSymptomList = symptomList?.map((symptom: object) => {
      if (symptom.symptomId === selectedSymptom.symptomId) {
        symptom?.severityScale?.map((severityScale) => {
          if (severityScale.severity === selectedScale) {
            severityScale.isSelected = !severityScale.isSelected;
          } else {
            severityScale.isSelected = false;
          }
          return severityScale;
        })
      }
      return symptom;
    });
    setSymptomList(updatedSymptomList);
  }

  const _handleOnSubmit = () => {
    const checkedItems = symptomList?.filter((symptom) => {
      return symptom.severityScale.find((severity) => severity.isSelected === true)
    })

    if (checkedItems.length !== symptomList.length) {
      return Alert.alert('Error!', "Please check all the symptom's severity.");
    }

    // TODO: save to local storage
    // console.log('STORAGE', STORAGE)
    // console.log('SYMPTOM_DAILY_KEY', STORAGE_CONSTANTS.SYMPTOM_DAILY_KEY)
  }
  const renderSymptoms = () => {

    return (
      <>
        {/* Symptom list */}
        {
          symptomList?.map((item, index) => {
            return (
              <View key={item.symptom + index} style={styles.optionListWrapper}>
                <View style={styles.optionItemLabelContainer}>
                  <MonoText style={styles.optionItemLabel}>{`${index + 1}. ${item.symptom}`}</MonoText>
                </View>
                {/* Severity scale options*/}
                <View style={styles.optionContainer}>
                  {item.severityScale?.length && item.severityScale.map((ele, index) => {
                    const getLabelBackground = () => {
                      index++;
                      return {
                        backgroundColor: `rgba(207, 116, 116, ${0.3 * index / 1.5} )`
                      }
                    };

                    return (
                      <View key={ele.severity + index} style={[styles.optionWrapper]}>
                        <CheckBox
                          checked={ele.isSelected}
                          containerStyle={styles.checkboxContainer}
                          onPress={() => _handleOnCheck(item, ele.severity)}
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
        {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.7)" />
        <View style={styles.startDateContainer}>
          <MonoText style={styles.startDateText}>Start Date: {moment(startDate).format('LLL')}</MonoText>
        </View>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.7)" /> */}
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
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => _handleOnSubmit()}
            >
              <MonoText style={styles.buttonLabel}>Submit</MonoText>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
