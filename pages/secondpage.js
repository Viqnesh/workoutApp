import React, { useState, useEffect, useRef } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { StyleSheet, SafeAreaView , Text, View ,   KeyboardAvoidingView, TouchableHighlight, Image,FlatList, Button,TextInput,ScrollView, Pressable } from 'react-native';
import BottomBar from '../utils/bottombar';
import Navbar from '../utils/navbar';
import Seance from '../components/seance';
import data from '../utils/data.json';
import Workout from '../pages/workout';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
function SecondPage({navigation}) {

    //DATA TABLE PROPS
    const infosTables = data;
    const wLists = infosTables['lists'];
    return (<View style={styles.container}>
      <Navbar/>
      {wLists.map(item => (
        <Pressable onPress={() => navigation.navigate('Workout')}>
        <Seance exo={item} />
        </Pressable>

      )
      )};
        <Pressable style={styles.floatingb}>
        <FontAwesome5 name="plus" size={20}   style={styles.socialIcon} color='white'/>  
        </Pressable>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex:3,
        height:'100%',
      },
      floatingb: {
        backgroundColor: '#7430FA',
        padding: 15,
        borderRadius: 20,
        position: 'absolute',
        bottom: '5%',
        right: '10%',
      },
      headerBar: {
        fontSize: 18,
        padding: 15,
        backgroundColor: '#7430FA',
        color: 'white',
        flexDirection: 'row',
        width: '100%',
        height: 80,
        justifyContent: 'center',
        position: 'fixed',
        fontWeight: 'bold',
        fontFamily: 'Roboto'
      },
      socialIcon: {
        marginRight: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto'
      },
     title: {
        fontSize: 25,
        color: 'white',
        fontFamily: 'RobotoBold',
        marginLeft: 'auto',
        marginBottom: 'auto',
        marginTop: 'auto',
        textAlign: 'center'
      },
      subtitle: {
        fontSize: 12,
        color: 'black',
        fontFamily: 'Roboto',
        marginTop: 'auto',
        marginLeft: 10
  
      },
      iconPin :{
        marginRight: 25,
        marginTop: 'auto',
        marginBottom: 10
      },

});
export default SecondPage;