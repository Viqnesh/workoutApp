import React, { useState, useEffect, useRef } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { StyleSheet, SafeAreaView , Text, View ,   KeyboardAvoidingView, TouchableHighlight, Image,FlatList, Button,TextInput,ScrollView } from 'react-native';
import BottomBar from './bottombar';

function Navbar2({navigation}) {

    return (<View style={styles.container}>
        <View style={styles.headerBar}>
            <View style={styles.content}>
            <FontAwesome5 name="arrow-left" size={20} onPress={() => navigation.goBack()}  style={styles.socialIcon} color='white'/>  <Text style={styles.title}> WORKIN PROGRESS </Text>
            </View>
        </View>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height:80
      },
      socialIcon: {
        marginTop: 'auto',
        marginBottom:'auto'
      },
      content : {
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
     title: {
        fontSize: 25,
        color: 'white',
        fontFamily: 'RobotoBold',
        marginRight: 'auto',
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
export default Navbar2;