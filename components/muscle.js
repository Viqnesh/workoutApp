import React, { useState, useEffect, useRef } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { StyleSheet, SafeAreaView , Text, View ,   KeyboardAvoidingView, TouchableHighlight, Image,FlatList, Button,TextInput,ScrollView } from 'react-native';
import BottomBar from '../utils/bottombar';
import Navbar from '../utils/navbar';
function Muscle(props) {
    return (
        <View style={styles.socials}>
            <View style={styles.socialOng} styles={{backgroundColor: 'red'}}>      
            <FontAwesome5 name={props.pic} size={40}   style={styles.socialIcon} color='#7430FA'/>  
             <Text style={styles.socialTextTitle}>{props.label} </Text> 
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
        marginTop: 15,
        
        marginBottom:10
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
        fontFamily: 'RobotoBold',
        fontSize: 18,
        marginRight: '10',
        marginBottom: 'auto',
        display:'flex',
        flexDirection: 'column',
        marginTop: 'auto',
        marginLeft: 15
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
        elevation: 5,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      socialIcon: {
        marginLeft: 5,
        justifyContent:'center',
        width: 60,
        textAlign: 'center'

      },
});
export default Muscle;