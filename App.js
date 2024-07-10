import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SecondPage from './pages/secondpage.js';
import FirstPage from './pages/firstpage.js';
import Navbar from './utils/navbar.js';
import BottomBar from './utils/bottombar.js';
import Workout from './pages/workout.js';
import Seance from './components/seance.js';
import Stats from './pages/stats.js';
import Navbar2 from './utils/navbar2.js';
import Graph from './pages/graph.js';
import GraphDetails from './pages/graphdetails.js';
const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'RobotoBold': require('./assets/fonts/Roboto-Bold.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
    }
  }, [fontsLoaded, fontError]);
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
              <Stack.Screen name="BottomBar" component={BottomBar} options={{ headerShown: false }}/>
              <Stack.Screen name="Workout" component={Workout} options={{ headerStyle: { backgroundColor: '#7430FA', height: 80} , title: 'Seance Biceps/Triceps', headerTintColor: 'white', fontFamily: 'RobotoBold' }} />
              <Stack.Screen name="FP" component={FirstPage} options={{ headerShown: false }}/>
              <Stack.Screen name="SP" component={SecondPage} options={{ headerShown: false }}/>
              <Stack.Screen name="Seance" component={Seance} options={{ headerShown: false }}/>
              <Stack.Screen name="Stats" component={Stats} options={{ headerShown: false }}/>
              <Stack.Screen name="Graph" component={Graph} options={{ headerShown: false }}/>
              <Stack.Screen name="GraphDetails" component={GraphDetails} options={{ headerStyle: { backgroundColor: '#7430FA', height: 80} , title: 'Muscle Details', headerTintColor: 'white', fontFamily: 'RobotoBold' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
