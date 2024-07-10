import React, { useState, useEffect, useRef } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { StyleSheet, SafeAreaView , Text, View ,   KeyboardAvoidingView, TouchableHighlight, Image,FlatList, Button,TextInput,ScrollView } from 'react-native';
import BottomBar from '../utils/bottombar';
import Navbar from '../utils/navbar';
import Seance from '../components/seance';
import Muscle from '../components/muscle';
import { Octicons } from '@expo/vector-icons';
import data from '../utils/data.json';

function FirstPage() {
    //DATA TABLE PROPS
    const infosTables = data;
    const wLists = infosTables['lists'];
    return (<ScrollView style={styles.container}>
      <Navbar/>
      <Text style={styles.title}> MON PROFIL <FontAwesome5 name="pen" size={14} style={styles.titleIcon} color='black'/>  </Text> 
      <View style={styles.socialsZ}>
      <View style={styles.socials}>
            <View style={styles.socialOng} styles={{backgroundColor: 'red'}}>     
            <FontAwesome5 name="weight" size={60}   style={styles.socialIcon} color='white'/>  
            <Text style={styles.socialTextTitle}> 74 kg </Text> 
            </View>
            <View style={styles.socialOng} styles={{backgroundColor: 'red'}}>      
            <FontAwesome5 name="ruler" size={60}   style={styles.socialIcon} color='white'/>  
            <Text style={styles.socialTextTitle}> 1'78 </Text> 
            </View>
      </View>
      <View style={styles.socials}>
            <View style={styles.socialOng} styles={{backgroundColor: 'red'}}>     
            <FontAwesome5 name="mars" size={60}   style={styles.socialIcon} color='white'/>  
            <Text style={styles.socialTextTitle}> Masculin </Text> 
            </View>
            <View style={styles.socialOng} styles={{backgroundColor: 'red'}}>     
            <FontAwesome5 name="bullseye" size={60}   style={styles.socialIcon} color='white'/>  
            <Text style={styles.socialTextTitle}> Prise de Masse </Text> 
            </View>
      </View>
      </View>

      <Text style={styles.title}> MON ENTRAINEMENT <FontAwesome5 name="pen" size={14} style={styles.titleIcon} color='black'/> </Text> 

      <View style={styles.muscles}>
        <View style={styles.muscle}>
          <Muscle label="5 Jours / Semaine" pic="calendar-week"/>
          <Muscle label="Type : Split" pic="dumbbell"/>
        </View>
        <View style={styles.muscle}>
          <Muscle label="Durée moyenne : 1h30" pic="clock"/>
        </View>
      </View>
    </ScrollView>);
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height:'100%',
      },
      socialTitle: {
        fontFamily: 'RobotoBold',
        width: '100%',
        marginTop: 10,
        fontSize: 12,
        textAlign: 'center'
        
      },
      socialsZ: {
        marginBottom: 15
      },
      muscles: {
        marginBottom:15
      },
      titleIcon: {
        marginLeft:20,
        padding: 10,
        borderRadius: 20,
        backgroundColor: 'white',
        elevation: 5,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3

      },
      muscle: {
        flexDirection: 'column',

      },
      socials: {
        flexDirection: 'row',
        paddingTop:10,
        paddingRight: 30,
        paddingLeft: 35,
        width: 190,
        height: 100,
        marginTop: 15,
        marginBottom: 22
      },
      socialsTxt: {
        display: 'flex',
      },
      socialOng: {
        backgroundColor: '#7430FA',
        padding: 15,
        borderRadius: 20,
        flexDirection: 'column',
        width: 140,
        height: 120,
        alignItems: 'center',
        marginRight: 25,
        shadowColor: 'black',
        elevation: 5,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3
      },
      socialIcon: {
        marginRight: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto'
      },
      socialText:  {
        marginLeft: 'auto',
        fontFamily: 'Roboto',
        fontSize: 12,
        marginRight: '10',
        display:'flex',
        flexDirection: 'column',
        marginTop: 'auto'
      },
      title:  {
        marginLeft: 'auto',
        fontFamily: 'RobotoBold',
        fontSize: 25,
        marginTop: 20,
        marginLeft: 15,
        alignItems: 'center',
        display:'flex',
        color: '#7430FA',
        flexDirection: 'row',
      },
      content: {
        marginTop: 50
      },
      socialTextTitle:  {
        marginLeft: 'auto',
        fontFamily: 'RobotoBold',
        fontSize: 15,
        color:'white',
        marginRight: 'auto',
        marginBottom: 'auto',
        display:'flex',
        flexDirection: 'column',
        marginTop: 'auto'
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
export default FirstPage;