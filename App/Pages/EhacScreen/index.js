import * as React from 'react';
import {
    View,
    Text, 
    SafeAreaView, 
    StyleSheet,
    StatusBar, 
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import {
    IconBack,
    BgEhc,
    IconCreateEhc,
    IconMyEhc
} from '../../assets';

export default EhacScreen = ({navigation}) => {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
                    barStyle="light-content"
                    animated={true}
                    backgroundColor="#ffffff"
                    />
        
        <View style={styles.background}>
        <ImageBackground source={BgEhc} style={styles.bgdk}>
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
            <Image source={IconBack} style={styles.back}/>
          </TouchableOpacity>
          <Text style={styles.textjudul}>Ehac</Text>
        </View>
        </ImageBackground>
        </View>

        <View style={styles.box}>
          <View style={styles.itemcovid}>
            <Image source={IconCreateEhc} style={styles.covid}/>
            <View style={styles.textcovid}>
              <Text style={styles.judulcovid}>Create e-HAC</Text>
              <Text style={styles.isicovid}>Electronic Health Alert Card</Text>
              <View style={styles.garis}/>
            </View>
          </View>
          <View style={styles.itemcheck}>
            <Image source={IconMyEhc} style={styles.myehc}/>
            <View style={styles.textcheck}>
              <Text style={styles.judulcheck}>My e-HAC</Text>
              <Text style={styles.isicheck}>Check your history eHAC      here</Text>
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
    background:{

    },
    bgdk:{
      height:200
    },
    header: {
      marginTop:45,
      alignItems: 'center',
      flexDirection:'row',
      background:'BgDokter'
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
      paddingBottom:20,
    },

    itemcovid:{
      flexDirection:'row'
    },
    covid:{
      height:60,
      width:60,
      borderRadius:10,
      marginTop:15,
      marginLeft:10
    },
    textcovid:{
      marginLeft:20,
      marginTop:15,
      width:229
    },
    judulcovid:{
      fontSize:17,
      fontFamily:'Roboto-Bold'
    },
    isicovid:{
      fontSize:16,
      color:'gray'
    },
    garis:{
      height:1,
      backgroundColor:'#cdd2d5',
      marginTop:20,
    },

    itemcheck:{
      flexDirection:'row',
    },
    myehc:{
      height:60,
      width:60,
      borderRadius:10,
      marginTop:15,
      marginLeft:10
    },
    textcheck:{
      marginLeft:20,
      marginTop:15,
      width:220
    },
    judulcheck:{
      fontSize:17,
      fontFamily:'Roboto-Bold'
    },
    isicheck:{
      fontSize:16,
      color:'gray'
    },
})