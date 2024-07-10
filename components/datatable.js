import { StyleSheet, SafeAreaView , Text, View ,   KeyboardAvoidingView, TouchableHighlight, Image,FlatList, Button,TextInput,ScrollView } from 'react-native';
import Badge from './badge';
import data from '../datas/data.json';

function DataTable(props) {

    //DATA TABLE PROPS

    const data = props.exo[0].label;
    const SWR = props.exo[0].datas;
    var Tcharge = 0 ; 
    var Treps = 0;
    var Tseries = props.exo[0].datas.length;

    return (
        <View>
          <Badge label={data} />
          <View style={styles.table}>
            <View style={styles.head}>
              <Text style={styles.thead}>Séries</Text>
              <Text style={styles.thead}>Charge</Text>
              <Text style={styles.thead}>Réps</Text>
            </View>

            {/* Using map() to iterate over the data and render list items */}
            {SWR.map(item => (
                Tcharge = Tcharge + item.weight,
                Treps = Treps + item.reps,
                <View style={styles.row}>
                <Text style={styles.col}>{item.set}</Text>
                <Text style={styles.col}>{item.weight}</Text>
                <Text style={styles.col}>{item.reps}</Text>
              </View>
            ))}
            <View style={styles.rowT}>
              <Text style={styles.colT}>{Tseries} Séries</Text>
              <Text style={styles.colT}>{Tcharge} KG</Text>
              <Text style={styles.colT}>{Treps} Reps</Text>
            </View>
          </View>
          <View style={styles.tonnage}>
              <Text style={styles.ton}>Tonnage</Text>
              <Text style={styles.resultton}>{Tseries * Tcharge * Treps / 1000} T</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

      socials: {
        paddingTop:10,
        marginTop: 15,
      },
      rowT: {
        flexDirection: 'row',
        marginBottom:10,
        marginLeft:10,
        marginRight:10,
        backgroundColor: 'lightgreen',
        alignItems: 'center'
      },
      colT: {
        padding:10,
        width:150,
        marginLeft: 5,
        fontFamily: 'RobotoBold',
        textAlign: 'center',
        fontSize: 15,
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
      tonnage: {
        backgroundColor: 'white',
        marginTop: 15,
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 25,
        borderRadius: 20,
        width: 250
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
});
export default DataTable ;