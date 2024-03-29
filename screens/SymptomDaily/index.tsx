import * as React from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import moment from 'moment';

import { Text, View } from '../../components/Themed';
import { MonoText } from '../../components/StyledText';
import { SYMPTOMS_LIST, SEVERITY_SCALE_OPTIONS } from './constants';
import { STORAGE_CONSTANTS } from '../../constants/storage';
import { storageService } from '../../utils/storage';
import { randomId } from '../../helpers';
import { getGreetingTime } from './helper';
import { changeStack } from '../../navigation/navigation.service';
import styles from './style';

export default function SymptomsDaily(props) {
  const [username, setUserName] = React.useState();
  const [activeDay, setActiveDay] = React.useState(moment());
  const [startDate, setStartDate] = React.useState(moment());
  const [isDatePickerVisible, setDatePickerVisible] = React.useState(false);

  const [symptomList, setSymptomList] = React.useState(null);

  const [, forceUpdate] = React.useState(0);

  const updateSymptomList = React.useCallback(async () => {
    const SYMPTOM_DAILY_KEY = await STORAGE_CONSTANTS.SYMPTOM_DAILY_KEY(
      activeDay
    );
    const savedSymptomList = await storageService.getItemFromStore(
      SYMPTOM_DAILY_KEY,
      symptomList
    );
    if (savedSymptomList) {
      setSymptomList(savedSymptomList);
    } else {
      setSymptomList(getSymptomList());
    }
  }, [activeDay]);

  const updateName = React.useCallback(async () => {
    const userName = await storageService.getItemFromStore(
      STORAGE_CONSTANTS.USER_NAME_KEY
    );
    userName && setUserName(userName);
  }, [username]);

  React.useEffect(() => {
    updateSymptomList();
  }, [activeDay]);

  React.useEffect(() => {
    (async () => {
      const userName = await storageService.getItemFromStore(
        STORAGE_CONSTANTS.USER_NAME_KEY
      );
      userName && setUserName(userName);
    })();
    forceUpdate();
  }, [username]);

  const getSymptomList = () => {
    const symptoms: any = [];
    const getSeverityScale = () => {
      const severityScale: object[] = [];
      SEVERITY_SCALE_OPTIONS.forEach((item) => {
        severityScale.push({
          severity: item,
          isSelected: false,
        });
      });
      return severityScale;
    };

    SYMPTOMS_LIST.forEach((item, index) => {
      symptoms.push({
        symptomId: randomId() + index,
        symptom: item,
        severityScale: getSeverityScale(),
      });
    });

    return symptoms;
  };

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
        });
      }
      return symptom;
    });
    setSymptomList(updatedSymptomList);
  };

  const _handleUpdateDate = (type: string) => {
    if (type === 'back') {
      setActiveDay(moment(activeDay).subtract(1, 'day'));
    } else if (type === 'next') {
      setActiveDay(moment(activeDay).add(1, 'day'));
    }
  };

  const _handleOnSubmit = async () => {
    // await storageService.clearAll();
    const checkedItems = symptomList?.filter((symptom) => {
      return symptom.severityScale.find(
        (severity) => severity.isSelected === true
      );
    });

    if (checkedItems.length !== symptomList?.length) {
      return Alert.alert('Error!', "Please check all the symptom's severity.");
    } else {
      const SYMPTOM_DAILY_KEY = await STORAGE_CONSTANTS.SYMPTOM_DAILY_KEY(
        activeDay
      );
      await storageService.saveItem(SYMPTOM_DAILY_KEY, symptomList);
      return Alert.alert('Success!', "Symptoms's severity response saved!");
    }
  };

  const _handleOnDateChange = (selectedDate) => {
    const currentDate = selectedDate || activeDay;
    setDatePickerVisible(false);
    setActiveDay(currentDate);
  };

  const renderSymptoms = () => {
    return (
      <>
        {/* Symptom list */}
        {symptomList?.map((item, index) => {
          return (
            <View key={item.symptom + index} style={styles.optionListWrapper}>
              <View style={styles.optionItemLabelContainer}>
                <MonoText style={styles.optionItemLabel}>{`${index + 1}. ${
                  item.symptom
                }`}</MonoText>
              </View>
              {/* Severity scale options*/}
              <View style={styles.optionContainer}>
                {item.severityScale?.length &&
                  item.severityScale.map((ele, index) => {
                    const getLabelBackground = () => {
                      index++;
                      return {
                        backgroundColor: `rgba(207, 116, 116, ${
                          (0.43 * index) / 1.5
                        } )`,
                      };
                    };

                    return (
                      <View
                        key={ele.severity + index}
                        style={[styles.optionWrapper]}
                      >
                        <CheckBox
                          checked={ele.isSelected}
                          containerStyle={styles.checkboxContainer}
                          onPress={() => _handleOnCheck(item, ele.severity)}
                        />
                        <View
                          style={[
                            styles.optionLabelWrapper,
                            getLabelBackground(),
                          ]}
                        >
                          <MonoText style={[styles.optionLabel]}>
                            {ele.severity}
                          </MonoText>
                        </View>
                      </View>
                    );
                  })}
              </View>
            </View>
          );
        })}
      </>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <MonoText numberOfLines={1} style={styles.headerText}>
          {getGreetingTime(moment())}, {username}!
        </MonoText>
      </View>
      <View style={styles.subContainer}>
        <MonoText style={styles.title}>Symptoms Daily</MonoText>
        {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.7)" />
        <View style={styles.startDateContainer}>
          <MonoText style={styles.startDateText}>Start Date: {moment(startDate).format('LLL')}</MonoText>
        </View>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.7)" /> */}
        <View style={styles.mainContent}>
          <View style={styles.listItemContainer}>
            <TouchableOpacity
              style={styles.listItemLeft}
              onPress={() => _handleUpdateDate('back')}
            >
              <MaterialIcons
                name={'arrow-back-ios'}
                size={24}
                color="#979797"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listItemMiddle}
              onPress={() => setDatePickerVisible(true)}
            >
              <MonoText style={styles.listItemTitle}>
                {moment(activeDay).format('LL')}
              </MonoText>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listItemRight}
              onPress={() => _handleUpdateDate('next')}
            >
              <MaterialIcons
                name={'arrow-forward-ios'}
                size={24}
                color="#979797"
              />
            </TouchableOpacity>
          </View>
          <ScrollView
            contentContainerStyle={styles.scrollViewContainer}
            style={styles.listItemWrapper}
          >
            {renderSymptoms()}
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => _handleOnSubmit()}
            >
              <MonoText style={styles.buttonLabel}>Submit</MonoText>
            </TouchableOpacity>
          </ScrollView>
          <DateTimePickerModal
            mode="date"
            isVisible={isDatePickerVisible}
            onConfirm={_handleOnDateChange}
            onCancel={() => setDatePickerVisible(false)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
