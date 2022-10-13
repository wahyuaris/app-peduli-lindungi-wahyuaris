import * as React from 'react';
import {
    View,
    Text, 
    SafeAreaView, 
    StyleSheet,
    StatusBar, 
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';
import {
    IconProfile,
    IconBell,
    IconHandQr,
    IconDropdown,
    IconScan,
    IconVaccine,
    IconCovidTest,
    IconEhac,
    IconTravelRegulation,
    IconTelemedicine,
    IconHealthcare,
    IconCovid,
    IconFindHospital,
    IconStatisCovid
} from '../../assets';


export default HomeScreen = ({navigation}) => {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
                    barStyle="light-content"
                    animated={true}
                    backgroundColor="#ffffff" />

        <View style={styles.contentimg}>
          <Image source={IconProfile} style={styles.imgIcon}/>
          <Text style={styles.text1}>Hi,</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
            <Text style={styles.text2}>Pargoy</Text>
          </TouchableOpacity>
          <Image source={IconBell} style={styles.imgIcon2}/>
        </View>

        <View style={styles.content2}>
            <View style={styles.content3}>
                <View style={styles.content4}>
                <Text style={styles.text3}>mau masuk ruang public?</Text>
                <Text style={styles.text4}>Stay alert to stay safe</Text>
                </View>
                <Image source={IconHandQr} style={styles.imgIcon3}/>
            </View>
            <View style={styles.contentcheckin}>
                
                    <Image source={IconDropdown} style={styles.imgIcon4}/>
                    <Text style={styles.text5}>Check-in Preference</Text>
              <View style={styles.contentscan}>
                <Image source={IconScan} style={styles.imgIcon5}/>
                <Text style={styles.text6}>Check-in</Text>
              </View>
            </View>
        </View>
        
        <View style={styles.garis}/>

        <View style={styles.home}>
          <View style={styles.row1}>
            <View style={styles.icon1}>
              <TouchableOpacity onPress={()=>navigation.navigate('ImmunScreen')}>
                <Image source={IconVaccine} style={styles.vaccine}/>
              </TouchableOpacity>
              <Text style={styles.textvaccine}>Vaccine and Immunization</Text>
            </View>
            <View style={styles.icon2}>
              <TouchableOpacity onPress={()=>navigation.navigate('CovidTestScreen')}>
                <Image source={IconCovidTest} style={styles.covidtest}/>
              </TouchableOpacity>
              <Text style={styles.textcovidtest}>Covid-19 Test Result</Text>
            </View>
            <View style={styles.icon3}>
              <TouchableOpacity onPress={()=>navigation.navigate('EhacScreen')}>
                <Image source={IconEhac} style={styles.ehac}/>
              </TouchableOpacity>
              <Text style={styles.textehac}>EHAC</Text>
            </View>
          </View>

          <View style={styles.row2}>
              <View style={styles.icon4}>
              <TouchableOpacity 
                onPress={() => 
                  Alert.alert("informasi", "Sedang dalam pengembangan", [
                    {
                      text: "ok",
                      onPress: () => console.log("Ok"),
                    },
                  ])
                }>
                <Image source={IconTravelRegulation} style={styles.travel}/>
                <Text style={styles.texttravel}>Travel Regulations</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.icon5}>
             
                <Image source={IconTelemedicine} style={styles.telemedicine}/>
                <Text style={styles.texttelemedicine}>Telemedicine</Text>
                
              </View>
              <View style={styles.icon6}>
                <Image source={IconHealthcare} style={styles.healthcare}/>
                <Text style={styles.texthealth}>Healthcare Facility</Text>
              </View>
            </View>
            <View style={styles.row3}>
              <View style={styles.icon7}>
                <Image source={IconStatisCovid} style={styles.covid}/>
                <Text style={styles.textcovid}>Covid-19 Statistic</Text>
              </View>
              <View style={styles.icon8}>
                <Image source={IconFindHospital} style={styles.findhospital}/>
                <Text style={styles.textfindhospital}>Find Hospital Bed</Text>
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
    contentimg: {
      backgroundColor:'#ffffff',
      marginTop:10,
      alignItems: 'center',
      flexDirection:'row'
    },
    imgIcon:{
      height:25,
      width:25,
      marginLeft:20
    },
    text1: {
      marginLeft:5,
      fontSize:15,
      textAlign:'left',
      color: 'black',
    },
    text2:{
        fontSize:15,
        color:'black',
        marginLeft:3,
        textDecorationLine:'underline'
    },
    imgIcon2:{
        height:23,
        width:23,
        marginLeft:120
    },
    content2:{
        marginTop:30,
        alignContent:'center',
        alignItems:'center',
        borderColor:'black',
        borderWidth:1,
        borderRadius:10,
        marginLeft:20,
        marginRight:20,
        paddingBottom:20
    },
    content3:{
        height:80,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        backgroundColor:'#239BD8',
        flexDirection:'row',
    },
    text3: {
        marginTop:10,
        marginLeft:20,
        fontSize:18,
        color: 'white',
      },
      text4: {
        fontSize:11,
        marginLeft:20,
        color: 'white'
      },
    imgIcon3:{
        height:60,
        width:60,
        marginRight:10,
        marginTop:20
    },
    content4:{
        marginRight:30,
        backgroundColor:'#239BD8',
        borderRadius:10,
    },
    contentcheckin:{
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:'#ffffff',
        flexDirection:'row',
    },
    contentscan:{
        marginLeft:40,
        marginRight:10,
        marginTop:12,
        alignItems:'center',
        backgroundColor:'#def3ff',
        borderRadius:20,
        paddingRight:13,
        paddingLeft:13,
        flexDirection:'row',
    },
    text5: {
        marginTop:20,
        fontSize:14,
        color: 'black'
    },
    imgIcon4:{
        marginTop:10,
        height:40,
        width:40,
    },
    imgIcon5:{
        height:20,
        width:20,
    },
    text6: {
      marginLeft:5,
      fontSize:12,
      color: '#008bde'
    },

    garis:{
      marginTop:15,
      height:10,
      backgroundColor:'#cdd2d5'
    },

    home:{
      backgroundColor:'#ffffff'
    },
    row1:{
      flexDirection:'row',
      backgroundColor:'#ffffff',
      alignContent:'center',
      alignItems:'center'
    },

    icon1:{
      alignItems:'center',
      alignContent:'center',
      marginTop:15,
      marginLeft:10,
      height:120,
      width:120
    },
    vaccine:{
      height:70,
      width:70,
      borderRadius:10
    },
    textvaccine:{
      marginTop:5,
      fontSize:13,
      color:'black',
      textAlign:'center'
    },

    icon2:{
      alignItems:'center',
      alignContent:'center',
      marginTop:15,
      height:120,
      width:110
    },
    covidtest:{
      height:70,
      width:70,
      borderRadius:10
    },
    textcovidtest:{
      marginTop:5,
      fontSize:13,
      color:'black',
      textAlign:'center'
    },

    icon3:{
      alignItems:'center',
      alignContent:'center',
      marginTop:15,
      marginRight:15,
      height:120,
      width:110
    },
    ehac:{
      height:70,
      width:70,
      borderRadius:10
    },
    textehac:{
      marginTop:5,
      fontSize:13,
      color:'black',
      textAlign:'center'
    },

    row2:{
      flexDirection:'row',
      backgroundColor:'#ffffff',
      alignContent:'center',
      alignItems:'center'
    },
    icon4:{
      alignItems:'center',
      alignContent:'center',
      marginLeft:20,
      height:120,
      width:100,
      marginTop:10
    },
    travel:{
      height:70,
      width:70,
      borderRadius:10
    },
    texttravel:{
      marginTop:5,
      fontSize:13,
      color:'black',
      textAlign:'center'
    },

    icon5:{
      alignItems:'center',
      alignContent:'center',
      height:120,
      width:110,
      marginLeft:10,
      marginTop:10
    },
    telemedicine:{
      height:70,
      width:70,
      borderRadius:10
    },
    texttelemedicine:{
      marginTop:5,
      fontSize:13,
      color:'black',
      textAlign:'center'
    },

    icon6:{
      alignItems:'center',
      alignContent:'center',
      height:120,
      width:100,
      marginLeft:5,
      marginTop:10
    },
    healthcare:{
      height:70,
      width:70,
      borderRadius:10
    },
    texthealth:{
      marginTop:5,
      fontSize:13,
      color:'black',
      textAlign:'center'
    },

    row3:{
      flexDirection:'row',
      backgroundColor:'#ffffff',
      alignContent:'center',
      alignItems:'center'
    },
    icon7:{
      alignItems:'center',
      alignContent:'center',
      marginLeft:20,
      height:120,
      width:100,
      marginTop:10
    },
    covid:{
      height:70,
      width:70,
      borderRadius:10
    },
    textcovid:{
      marginTop:5,
      fontSize:13,
      color:'black',
      textAlign:'center'
    },

    icon8:{
      alignItems:'center',
      alignContent:'center',
      height:120,
      width:110,
      marginLeft:10,
      marginTop:10
    },
    findhospital:{
      height:70,
      width:70,
      borderRadius:10
    },
    textfindhospital:{
      marginTop:5,
      fontSize:13,
      color:'black',
      textAlign:'center'
    },
});