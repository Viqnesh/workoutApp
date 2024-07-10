import React, { useState, useEffect, useRef } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { StyleSheet, SafeAreaView , Text, View ,   KeyboardAvoidingView, TouchableHighlight, Image,FlatList, Button,TextInput,ScrollView } from 'react-native';
import BottomBar from '../utils/bottombar';
import Navbar from '../utils/navbar2';
import SmallPill from '../components/smallpill';
import Badge from '../components/badge';
import DataTable from '../components/datatable';
import data from '../datas/data.json';

const infosTables = data;
const exoInfo1 = infosTables['exo1'];
const exoInfo2 = infosTables['exo2'];
const exoInfo3 = infosTables['exo3'];


//PILLS PROPS 
    var tseriesExo1 = exoInfo1[0].datas.length ;
    var tseriesExo2 = exoInfo2[0].datas.length ;
    var tseriesExo3 = exoInfo3[0].datas.length ;

    var kg = 0;
    var reps = 0;
    var sets = 0;
    var tons = 0

    var tchargeExo1 = 0 ;
    var trepsExo1 = 0 ;

    var tchargeExo2 = 0 ;
    var trepsExo2 = 0 ;

    var tchargeExo3 = 0 ;
    var trepsExo3 = 0 ; 

    {exoInfo1[0].datas.map(item => (
      tchargeExo1 = tchargeExo1 + item.weight,
      trepsExo1 = trepsExo1 + item.reps
    )
    )};

    {exoInfo2[0].datas.map(item => (
      tchargeExo2 = tchargeExo2 + item.weight,
      trepsExo2 = trepsExo2 + item.reps
    )
    )};

    {exoInfo3[0].datas.map(item => (
      tchargeExo3 = tchargeExo3 + item.weight,
      trepsExo3 = trepsExo3 + item.reps
    )
    )};

    var ttonExo1 = tseriesExo1 * tchargeExo1 * trepsExo1 / 1000 ;
    var ttonExo2 = tseriesExo2 * tchargeExo2 * trepsExo2 / 1000 ;
    var ttonExo3 = tseriesExo3 * tchargeExo3 * trepsExo3 / 1000 ;

    const charge = 
    {swr: [
      { set: tseriesExo1, weight: tchargeExo1, reps: trepsExo1, ton: ttonExo1 },
      { set: tseriesExo2, weight: tchargeExo2, reps: trepsExo2, ton: ttonExo2 },
      { set: tseriesExo3, weight: tchargeExo3, reps: trepsExo3, ton: ttonExo3 },
    ]};

    var pillCharge = 0 ;
    var pillRep = 0;
    var pillSet = 0;
    var pillTon = 0


    {charge.swr.map(item => (
      pillCharge = pillCharge + item.weight,
      pillRep = pillRep + item.reps,
      pillSet = pillSet + item.set,
      pillTon = pillTon + item.ton
    ))}

function Workout({navigation}) {
    return (<View style={styles.container}>
        <ScrollView style={styles.workoutPage}>
        <Text style={styles.title}> Seance Biceps / Triceps  </Text> 
        <Text style={styles.subtitle}> 31/03/2024  </Text> 
        <View style={styles.pill}>
        <SmallPill data={pillSet}  label="Series" pic="calendar"/>
        <SmallPill data={pillRep} label="Reps"  pic="clock"/>
        </View>
        <View style={styles.pill}>
        <SmallPill data={pillCharge}  label="KG" pic="dumbbell"/>
        <SmallPill data={pillTon} label="T" pic="clock"/>
        </View>

        <DataTable exo={exoInfo1}/>
        <DataTable exo={exoInfo2}/>
        <DataTable exo={exoInfo3}/>

        </ScrollView>
        </View>
     );
}

const styles = StyleSheet.create({
  container: {
      width: '100%',
      flex:3,
      height:'100%',
      
    },
    workoutPage: {
      marginTop: 15
    },
    headerIcon: {
      marginTop: 'auto',
      marginBottom:'auto'
    },
    headerContent : {
      flexDirection: 'row',
      width: '100%',
      marginTop: 'auto',
      marginRight: 'auto',
      marginBottom:'auto'
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
   headerTitle: {
      fontSize: 25,
      color: 'white',
      fontFamily: 'RobotoBold',
      marginRight: 'auto',
      marginLeft: 'auto',
      marginBottom: 'auto',
      marginTop: 'auto',
      textAlign: 'center'
    },
    tonnage: {
      backgroundColor: 'white',
      marginTop: 15,
      flexDirection: 'row',
      marginLeft: 'auto',
      marginRight: 25,
      borderRadius: 20
    },
    ton: {
      backgroundColor: 'black',
      color: 'white',
      padding:10,
      fontFamily: 'RobotoBold',
      textAlign: 'center',
      width: '100%',
      borderRadius: 20

    },
    resultton: {
      backgroundColor: 'white',
      color: 'black',
      padding:10,
      fontFamily: 'RobotoBold',
      textAlign: 'center',
      width: '100%',
      borderRadius: 20

    },
    row: {
      flexDirection: 'row',
      marginBottom:10,
      marginLeft:10,
      marginRight:10,
      alignItems: 'center'
    },
    col: {
      padding:10,
      width:150,
      marginLeft: 5,
      fontFamily: 'Roboto',
      textAlign: 'center',
      fontSize: 15,
    },
    pill: {
      flexDirection: 'row'
    },
    table: {
      width: 360,
      height: 'fit-content',
      backgroundColor: 'white',
      borderRadius: 20,
      marginLeft: 15,
      marginTop: 15
    },
    head: {
      flexDirection: 'row',
      margin:10,
      backgroundColor: 'black',
      borderRadius: 20,
      alignItems: 'center'
    },
    thead: {
      padding:10,
      width:150,
      marginLeft: 5,
      color: 'white',
      fontFamily: 'RobotoBold',
      textAlign: 'center',
      fontSize: 15,

    },
    socialTextTitle:  {
      fontFamily: 'RobotoBold',
      fontSize: 10,
      color:'white',
      display:'flex',
      flexDirection: 'column',
    },
    socials: {
      flexDirection: 'row',
      paddingTop:5,
      paddingRight: 30,
      paddingLeft: 15,
      width: 250,
      height: 100,
      marginTop: 15,
    },
    socialsTxt: {
      display: 'flex',
    },
    socialOng: {
      backgroundColor: '#7430FA',
      padding: 15,
      borderRadius: 20,
      flexDirection: 'row',
      width: 80,
      height: 80,
      alignItems: 'center',
      marginRight: 15,
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
      color: 'black',
      fontFamily: 'RobotoBold',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 30,
      marginBottom: 10,
      textAlign: 'center'
    },
    subtitle: {
      fontSize: 20,
      color: 'black',
      fontFamily: 'RobotoBold',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 10,
      marginBottom: 5,
      textAlign: 'center'

    },
    iconPin :{
      marginRight: 25,
      marginTop: 'auto',
      marginBottom: 10
    },

});
export default Workout;