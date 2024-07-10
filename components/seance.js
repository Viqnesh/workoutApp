import React, { useState, useEffect, useRef } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { StyleSheet, SafeAreaView , Text, View ,   KeyboardAvoidingView, TouchableHighlight, Image,FlatList, Button,TextInput,ScrollView } from 'react-native';
import BottomBar from '../utils/bottombar';
import Navbar from '../utils/navbar';
import Workout from '../pages/workout';
function Seance(props) {
    return (
        <View style={styles.socials} >
            <View style={styles.socialOng} styles={{backgroundColor: 'red'}}>      
                <FontAwesome5 name="dumbbell" size={40}   style={styles.socialIcon} color='purple'/>  
            <View style={styles.socialsTxt}>
            <Text style={styles.socialTextTitle}>{props.exo.label} </Text> 
            <Text style={styles.socialText}>{props.exo.date} </Text>       
            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex:0.5,
        height:'100%',
      },
      socials: {
        flexDirection: 'column',
        paddingTop:10,
        paddingRight: 30,
        paddingLeft: 35,
        marginTop: 15
      },
      socialsTxt: {
        display: 'flex',
        flexDirection: 'column'
      },
      socialText:  {
        marginLeft: 'auto',
        fontFamily: 'Roboto',
        fontSize: 12,
        marginRight: '10',
        marginBottom: 'auto',
        display:'flex',
        flexDirection: 'column',
        marginTop: 'auto'
      },
      socialTextTitle:  {
        marginLeft: 'auto',
        fontFamily: 'RobotoBold',
        fontSize: 18,
        marginRight: '10',
        marginBottom: 'auto',
        display:'flex',
        flexDirection: 'column',
        marginTop: 'auto'
      },
      socialOng: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 5,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginRight: 25,
        shadowColor: 'black',
        /*elevation: 5,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,*/
      },
      socialIcon: {
        marginRight: 'auto',
        marginLeft: 5,

      },
});
export default Seance;