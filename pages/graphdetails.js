import React, { useState, useEffect, useRef } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { StyleSheet, SafeAreaView , Text, View ,   KeyboardAvoidingView, TouchableHighlight, Image,FlatList, Button,TextInput,ScrollView } from 'react-native';
import BottomBar from '../utils/bottombar';
import Navbar from '../utils/navbar';
import Seance from '../components/seance';
import data from '../utils/data.json';
import MediumPill from '../components/mediumpill';
import Badge from '../components/badge';
function GraphDetails() {

    return (<View style={styles.container}>
        <ScrollView>
        <View>
        <Text style={styles.title}> PROGRESSION  </Text> 
        <Text style={styles.title}> EXERCICES </Text> 
        <Badge label="Exo Name"/>
        <Badge label="Exo Name" />
        <Badge label="Exo Name" />

        </View>
        </ScrollView>

    </View>);
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height:'100%',
        
      },
      opa0: {opacity:0
      },
      containerM: {
        flexDirection: 'row',
        justifyContent: 'center'

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
        fontFamily: 'RobotoBold',
        marginLeft: 15,
        marginBottom: 'auto',
        color: 'black',
        marginTop: 15,
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
export default GraphDetails;