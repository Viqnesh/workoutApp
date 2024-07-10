import { StyleSheet, SafeAreaView , Text, View ,   KeyboardAvoidingView, TouchableHighlight, Image,FlatList, Button,TextInput,ScrollView } from 'react-native';

function Badge(props) {
    return (
        <Text style={styles.socialTextTitle}>{props.label}</Text> 
    );
}

const styles = StyleSheet.create({

      socials: {
        paddingTop:10,
        marginTop: 15,
      },

      socialTextTitle:  {
        marginLeft: 20,
        fontFamily: 'RobotoBold',
        fontSize: 18,
        marginRight: '10',
        marginBottom: 'auto',
        padding: 10,
        borderRadius: 15,
        color: 'white',
        width: 'fit-content',
        display:'flex',
        flexDirection: 'column',
        backgroundColor: 'black',
        marginTop: 20
      },
});
export default Badge ;