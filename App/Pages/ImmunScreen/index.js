import * as React from 'react';
import {
    View,
    Text, 
    SafeAreaView, 
    StyleSheet,
    StatusBar, 
    Image,
    TouchableOpacity
} from 'react-native';
import {
    IconBack,
    IconCovid,
    IconCheckIn,
    IconChild
} from '../../assets';

export default ImmunScreen = ({navigation}) => {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
                    barStyle="light-content"
                    animated={true}
                    backgroundColor="#ffffff" />

        <View style={styles.header}>
          <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
            <Image source={IconBack} style={styles.back}/>
          </TouchableOpacity>
          <Text style={styles.textjudul}>Vaccine and Immunization</Text>
        </View>

        <View style={styles.box}>
          <View style={styles.itemcovid}>
            <Image source={IconCovid} style={styles.covid}/>
            <View style={styles.textcovid}>
              <Text style={styles.judulcovid}>Covid-19 Vaccination</Text>
              <Text style={styles.isicovid}>See your vaccine certificate here</Text>
              <View style={styles.garis}/>
            </View>
          </View>
          <View style={styles.itemcheck}>
            <Image source={IconCheckIn} style={styles.check}/>
            <View style={styles.textcheck}>
              <Text style={styles.judulcheck}>Check-In Verification</Text>
              <Text style={styles.isicheck}>COVID-19 vaccine certificate verification in EU format</Text>
              <View style={styles.garis}/>
            </View>
          </View>
          <View style={styles.itemchild}>
            <Image source={IconChild} style={styles.child}/>
            <View style={styles.textchild}>
              <Text style={styles.judulchild}>Child Immunization</Text>
              <Text style={styles.isichild}>See your child's immunization record here</Text>
            </View>
          </View>
        </View>

      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#ffffff',
    },
    header: {
      backgroundColor:'#ffffff',
      marginTop:45,
      alignItems: 'center',
      flexDirection:'row'
    },
    back:{
      height:20,
      width:20,
      marginLeft:20
    },
    textjudul:{
      marginLeft:15,
      fontSize:18,
      textAlign:'left',
      color: 'black',
      fontFamily:'Lato-Bold'
    },
    box:{
      marginTop:30,
      borderColor:'#cdd2d5',
      borderWidth:1,
      borderRadius:20,
      marginLeft:20,
      marginRight:20,
      paddingBottom:20
    },

    itemcovid:{
      flexDirection:'row'
    },
    covid:{
      height:70,
      width:70,
      borderRadius:10,
      marginTop:15,
      marginLeft:15
    },
    textcovid:{
      marginLeft:10,
      marginTop:15,
      width:223
    },
    judulcovid:{
      fontSize:17,
      fontFamily:'Roboto-Bold'
    },
    isicovid:{
      fontSize:16,
      color:'gray',
      marginLeft:10
    },
    garis:{
      height:1,
      backgroundColor:'#cdd2d5',
      marginLeft:10,
      marginTop:20
    },

    itemcheck:{
      flexDirection:'row',
    },
    check:{
      height:70,
      width:70,
      borderRadius:10,
      marginTop:15,
      marginLeft:15
    },
    textcheck:{
      marginLeft:10,
      marginTop:15,
      width:220
    },
    judulcheck:{
      fontSize:17,
      fontFamily:'Roboto-Bold'
    },
    isicheck:{
      fontSize:16,
      color:'gray',
      marginLeft:10
    },

    itemchild:{
      flexDirection:'row',
    },
    child:{
      height:70,
      width:70,
      borderRadius:10,
      marginTop:15,
      marginLeft:15
    },
    textchild:{
      marginLeft:10,
      marginTop:15,
      width:220
    },
    judulchild:{
      fontSize:17,
      fontFamily:'Roboto-Bold'
    },
    isichild:{
      fontSize:16,
      color:'gray',
      marginLeft:10
    },
})