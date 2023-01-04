// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
const Tab = createBottomTabNavigator();

function FirstScreen() {
  return (
    <Tab.Navigator initialRouteName="ScreenOne">
      <Tab.Screen
        name="ScreenOne"
        component={ScreenOne}
        options={{title: 'Screen One'}}
      />
      <Tab.Screen
        name="ScreenTwo"
        component={ScreenTwo}
        options={{title: 'Screen Two'}}
      />
    </Tab.Navigator>
  );
}
const RootStack = createStackNavigator();

function Home() {
  return (
    <RootStack.Navigator initialRouteName="First">
      <RootStack.Screen
        name="First"
        component={FirstScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
}

export default Home;
