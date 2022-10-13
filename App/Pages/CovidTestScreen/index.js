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
    IconEmpty
} from '../../assets';

export default CovidTestScreen = ({navigation}) => {
  
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
            <Text style={styles.textjudul}>Covid-19 Test Result</Text>
          </View>

          <View style={styles.body}>
            <Image source={IconEmpty} style={styles.empty}/>
          </View>

          <View style={styles.textbody}>
            <Text style={styles.isiempty}>You do not have a history of COVID-19 test</Text>
            <Text style={styles.isiempty}>results. Make sure you do a COVID-19 test at a laboratory</Text>
            <Text style={styles.isiempty}>affilated with the ministry of Health: <Text style={styles.textbiru}>PCR test lab </Text>or</Text>
            <Text style={styles.textbiru}>Antigen test lab </Text>
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
      body:{
        alignItems:'center',
        alignContent:'center',
        backgroundColor:'#ffffff',
        marginTop:60,
      },
      empty:{
        height:220,
        width:220
      },
      textbody:{
        textAlign:'center',
        alignItems:'center',
        marginTop:30
      },
      isiempty:{
        fontSize:13
      },
      textbiru:{
        fontSize:13,
        color:'#54B9ED'
      }
    });