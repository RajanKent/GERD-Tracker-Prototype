import * as React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { MonoText } from '../../components/StyledText';
import { Text, View } from '../../components/Themed';
import styles from './styles';

export default function FoodNSleep() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollViewWrapper}
          contentContainerStyle={styles.scrollViewContainer}
        >
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => null}
          >
            <MaterialIcons name="add-a-photo" size={24} color="#fff" />
            <MonoText style={styles.buttonLabel}>Add Breakfast</MonoText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => null}
          >
            <MaterialIcons name="add-a-photo" size={24} color="#fff" />
            <MonoText style={styles.buttonLabel}>Add Lunch</MonoText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => null}
          >
            <MaterialIcons name="add-a-photo" size={24} color="#fff" />
            <MonoText style={styles.buttonLabel}>Add Dinner</MonoText>
          </TouchableOpacity>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.7)" />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => null}
          >
            <MaterialCommunityIcons name="sleep" size={24} color="#fff" />
            <MonoText style={styles.buttonLabel}>Go to Bed</MonoText>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
