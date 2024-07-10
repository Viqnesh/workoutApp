import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navbar from './navbar';
import { StyleSheet, SafeAreaView , Text, View ,   KeyboardAvoidingView, TouchableHighlight, Image,FlatList, Button,TextInput,ScrollView } from 'react-native';
import FirstPage from '../pages/firstpage';
import SecondPage from '../pages/secondpage';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import Stats from '../pages/stats';
import Graph from '../pages/graph';

const Tab = createBottomTabNavigator();

function BottomBar() {
  return (<View style={styles.container}>
    <Tab.Navigator screenOptions={{ headerShown: false , TabBarLabelStyle: {fontFamily: 'RobotoBold'}, tabBarStyle: { backgroundColor: '#7430FA',height: 60, color: 'white', padding: 8 }, tabBarActiveTintColor: 'black', tabBarInactiveTintColor: 'white',}}>
      <Tab.Screen name="Home" component={FirstPage} 
      options={{
        tabBarLabel: 'General',
        tabBarIcon: ({ color, size }) => (
          <Octicons name="home" size={24}  color='white'/>),
      }}/>
      <Tab.Screen name="Settings" component={SecondPage} options={{
          tabBarLabel: 'Seances',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="dumbbell" size={24}  color='white'/>),
        }}/>
      <Tab.Screen name="SettingZ" component={Graph} options={{
          tabBarLabel: 'Stats',
          tabBarIcon: ({ color, size }) => (
            <Octicons name="graph" size={24}  color='white'/>),
        }}/>
    </Tab.Navigator>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%'
    },
  });
export default BottomBar;