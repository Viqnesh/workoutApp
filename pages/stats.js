import React, { useState, useEffect, useRef } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { StyleSheet, SafeAreaView , Text, View ,   KeyboardAvoidingView, TouchableHighlight, Image,FlatList, Button,TextInput,ScrollView } from 'react-native';
import BottomBar from '../utils/bottombar';
import Navbar from '../utils/navbar';
import Seance from '../components/seance';
import data from '../utils/data.json';
function Stats() {

    //DATA TABLE PROPS
    const infosTables = data;
    const wLists = infosTables['lists'];
    return (<View style={styles.container}>
        <Navbar/>
        
    </View>);
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex:3,
        height:'100%',
        
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
export default Stats;