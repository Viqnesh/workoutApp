import React, { useState, useEffect, useRef } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { StyleSheet, SafeAreaView , Text, View ,   KeyboardAvoidingView, TouchableHighlight, Image,FlatList, Button,TextInput,ScrollView } from 'react-native';
import BottomBar from '../utils/bottombar';
import Navbar from '../utils/navbar';



function MediumPill(props) {

    return (
        <View style={styles.socials}>
            <View style={styles.socialOng} styles={{backgroundColor: 'red'}}>      
            <Image source={props.pic} style={styles.stretch} />  
            </View>
            <Text style={styles.socialTextTitle}>{props.label}</Text> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height:'100%',
      },
      stretch: {
        width: 70,
        height:70,
        resizeMode: 'stretch',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto'
      },
      socials: {
        flexDirection: 'column',
        padding: 5,
        margin:10,
      },
      socialsTxt: {
        display: 'flex',
        flexDirection: 'column'
      },
      socialText:  {
        marginLeft: 'auto',
        fontFamily: 'Roboto',
        fontSize: 12,
        marginBottom: 'auto',
        display:'flex',
        flexDirection: 'column',
        marginTop: 'auto'
      },
      socialTextTitle:  {
        fontFamily: 'RobotoBold',
        fontSize: 15,
        marginTop: 15,
        width: '100%',
        color: 'black',
        marginBottom: 'auto',
        display:'flex',
        textTransform: 'uppercase',
        flexDirection: 'column',
        textAlign: 'center'
      },
      socialOng: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 20,
        flexDirection: 'column',
        width: 130,
        height: 110,
        alignItems: 'center',
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
});
export default MediumPill;