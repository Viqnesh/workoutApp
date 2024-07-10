import React, { useState, useEffect, useRef } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { StyleSheet, SafeAreaView , Text, View ,   KeyboardAvoidingView, TouchableHighlight, Image,FlatList, Button,TextInput,ScrollView } from 'react-native';
import BottomBar from '../utils/bottombar';
import Navbar from '../utils/navbar';



function SmallPill(props) {
    const data = props.data
    const label = props.label
    return (
        <View style={styles.socials}>
            <View style={styles.socialOng} styles={{backgroundColor: 'red'}}>      
            <FontAwesome5 name={props.pic} size={30}   style={styles.socialIcon} color='white'/>  
            </View>
            <Text style={styles.socialTextTitle}>{data} {label}</Text> 
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
        flexDirection: 'row',
        paddingTop:10,
        paddingLeft: 25,
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
        fontSize: 15,
        marginRight: 10,
        width: 70,
        marginBottom: 'auto',
        display:'flex',
        flexDirection: 'column',
        marginTop: 'auto',
      },
      socialOng: {
        backgroundColor: '#7430FA',
        padding: 15,
        borderRadius: 20,
        flexDirection: 'row',
        width: 70,
        height: 70,
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
});
export default SmallPill;