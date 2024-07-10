import React, { useState, useEffect, useRef } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { StyleSheet, SafeAreaView , Text, View ,   Pressable,KeyboardAvoidingView, TouchableHighlight, Image,FlatList, Button,TextInput,ScrollView } from 'react-native';
import BottomBar from '../utils/bottombar';
import Navbar from '../utils/navbar';
import Seance from '../components/seance';
import data from '../utils/data.json';
import MediumPill from '../components/mediumpill';
import chest from '../assets/chest.png';
import biceps from '../assets/biceps.png';
import triceps from '../assets/triceps.png';
import quads from '../assets/quads.png';
import hams from '../assets/hams.png';
import back from '../assets/back.png';
import abs from '../assets/abs.png';
import calves from '../assets/calves.png'
function Graph({navigation}) {

    return (<View style={styles.container}>
        <Navbar/>
        <ScrollView>
        <View style={styles.containerM}>
          
        <Pressable onPress={() => navigation.navigate('GraphDetails')}>
        <MediumPill label="Chest" pic={chest}/>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('GraphDetails')}>
        <MediumPill label="Back" pic={back}/>
        </Pressable>

        </View>
        <View style={styles.containerM}>

        <Pressable onPress={() => navigation.navigate('GraphDetails')}>
        <MediumPill label="Shoulders" pic={back}/>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('GraphDetails')}>
        <MediumPill label="Abs" pic={abs}/>
        </Pressable>
        </View>
        <View style={styles.containerM}>

        <MediumPill label="Biceps" pic={biceps}/>

        <MediumPill label="Triceps" pic={triceps}/>
        </View>
        <View style={styles.containerM}>

        <MediumPill label="Hamstrings" pic={hams}/>

        <MediumPill label="Quads" pic={quads}/>
        </View>
        <View style={styles.containerM}>

        <MediumPill label="Calves"  pic={calves}/>

        <View style={styles.opa0}>

        <MediumPill label="Calves"/>
        </View>
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
export default Graph;