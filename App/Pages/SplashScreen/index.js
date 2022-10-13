import * as React from 'react';
import {
    View,
    Text, 
    SafeAreaView, 
    StyleSheet,
    StatusBar, 
    Image,
} from 'react-native';
import {
    LogoPeduli,
    LogoKpcpen,
    LogoKominfo,
    LogoKemenkes,
    LogoBumn
} from '../../assets';

export default SplashScreen = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginScreen')
     }, 3000)
    }, [navigation]);

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
                    barStyle="light-content"
                    animated={true}
                    backgroundColor="#ffffff" />

        <View style={styles.contentimg}>
          <Image source={LogoPeduli} style={styles.imgIcon}/>
        </View>

        <Text style={styles.text1}>Bekerja sama dengan:</Text>

        <View style={styles.content}>
        <Image source={LogoKpcpen} style={styles.imgIcon2}/>
        <Image source={LogoKominfo} style={styles.imgIcon3}/>
        <Image source={LogoKemenkes} style={styles.imgIcon4}/>
        <Image source={LogoBumn} style={styles.imgIcon5}/>
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
      marginTop:200,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imgIcon:{
      height:70,
      width:300
    },
    content: {
      marginTop:10,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row'
    },
    text1: {
      marginTop:300,
      marginLeft:30,
      fontSize:10,
      textAlign:'left',
      fontFamily:'Lato-Regular',
      color: 'black',
    },
    imgIcon2:{
      marginRight:10,
      height:35,
      width:70,
      alignItems:'center',
      alignContent:'center'
    },
    imgIcon3:{
      marginRight:10,
      height:45,
      width:40,
      alignItems:'center',
      alignContent:'center'
    },
    imgIcon4:{
      marginRight:10,
      height:35,
      width:80,
      alignItems:'center',
      alignContent:'center'
    },
    imgIcon5:{
      height:30,
      width:60,
      alignItems:'center',
      alignContent:'center'
    },
  });