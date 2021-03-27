import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import SymptomsDaily from '../screens/SymptomDaily';
import PSQIScreen from '../screens/PSQI';
import FoodNSleep from '../screens/FoodNSleep';
import Analysis from '../screens/Analysis';

import {
  BottomTabParamList,
  TabOneParamList,
  TabTwoParamList,
  TabThreeParamList,
  TabFourParamList,
} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{
        tabStyle: {
          marginTop: 2,
          paddingBottom: 2,
        },
        activeTintColor: Colors[colorScheme].tint,
        labelStyle: {
          fontWeight: 'bold',
          fontFamily: 'mont-semi-bold',
        },
      }}
    >
      <BottomTab.Screen
        name="TabFour"
        component={TabFourNavigator}
        options={{
          title: 'Analysis',
          tabBarIcon: ({ color }) => (
            <TabBarMIcon name="analytics" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          title: 'Symptoms Daily',
          tabBarIcon: ({ color }) => (
            <TabBarMCIcon name="format-list-checks" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          title: 'PSQI',
          tabBarIcon: ({ color }) => <TabBarFIcon name="bed" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={TabThreeNavigator}
        options={{
          title: 'Food & Sleep',
          tabBarIcon: ({ color }) => (
            <TabBarMIcon name="add-a-photo" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarFIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} sstyle={{ marginBottom: -3 }} {...props} />;
}

function TabBarMCIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
}) {
  return (
    <MaterialCommunityIcons
      size={30}
      sstyle={{ marginBottom: -3 }}
      {...props}
    />
  );
}
function TabBarMIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  color: string;
}) {
  return <MaterialIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const commonTabStyle = {
  headerStyle: {
    backgroundColor: '#004b87',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontFamily: 'mont-semi-bold',
    alignSelf: 'center',
  },
};

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator
      screenOptions={{
        headerShown: false,
        ...commonTabStyle,
      }}
    >
      <TabOneStack.Screen
        name="TabOneScreen"
        component={SymptomsDaily}
        options={{ headerTitle: 'Symptoms Daily' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator
      screenOptions={{
        headerShown: true,
        ...commonTabStyle,
      }}
    >
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={PSQIScreen}
        options={{
          headerLeft: (props) => null,
          headerTitle: 'Sleep Quality Assessment (PSQI)',
        }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();
function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator
      screenOptions={{
        headerShown: true,
        ...commonTabStyle,
      }}
    >
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={FoodNSleep}
        options={{
          headerLeft: (props) => null,
          headerTitle: 'Food & Sleep',
        }}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator<TabFourParamList>();
function TabFourNavigator() {
  return (
    <TabFourStack.Navigator
      screenOptions={{
        headerShown: true,
        ...commonTabStyle,
      }}
    >
      <TabFourStack.Screen
        name="TabFourScreen"
        component={Analysis}
        options={{
          headerLeft: (props) => null,
          headerTitle: 'Analysis',
        }}
      />
    </TabFourStack.Navigator>
  );
}
