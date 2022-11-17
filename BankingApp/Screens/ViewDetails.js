import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import Deposit from './Deposit';

const ViewDetails = ({navigation, route}) => {
    const accNo = route.params.accNo;
    const uName = route.params.uName ;
    const password = route.params.password ;
    const ifsc = route.params.ifsc ;
    const balance = route.params.bal ;
    const email = route.params.email ;

  return (
    <View style={styles.cantainer}>
      <Text style={styles.headerTxt}>WELCOME {uName}</Text>
      <View style={styles.subView}>
        <Text style={styles.subTxt}>View Details </Text>
        
        <Text style={styles.format}>Acc No.   : {accNo}</Text>
        <Text style={styles.format}>Name       : {uName}</Text>
        <Text style={styles.format}>Email        : {email}</Text>
        <Text style={styles.format}>Ifsc No.    : {ifsc}</Text>
        <Text style={styles.format}>Balance    : {balance}</Text>
        <Text style={styles.format}>PIN code   : {password}</Text>


      </View>
    </View>
  );



}

export default ViewDetails

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#cafaf5',
//     paddingHorizontal:5
//   },
//   userDetails: {color:'white', fontSize:20, marginVertical:3},
//   textHome: {color:'#0D4C92', fontSize:20, marginVertical:3},
//   headview:{backgroundColor:'#0D4C92',marginTop:45, paddingTop:40, paddingHorizontal:20, paddingBottom:30,borderRadius:30, borderBottomRightRadius:80,},
//   headtext: {fontSize:40, marginVertical:10,marginHorizontal:20, marginBottom:40,color:'white'},
//   text:{fontSize:20, marginHorizontal:10, marginVertical:5, color:'#0D4C92'},
//   navtext:{fontSize:15, marginHorizontal:10, marginVertical:2, color:'#0D4C92'},
//   TextInput:{height:40, width:300,borderWidth:1, paddingLeft:20, borderRadius:10, margin:7, backgroundColor: 'white'},
//   Btn: {height:45, borderWidth:1, borderRadius:7, alignItems:'center', justifyContent:'center' ,backgroundColor:'#0D4C92',marginVertical:14}
// })

const styles = StyleSheet.create({
  cantainer: {
    backgroundColor: '#d9d9d9',
    height: 700,
  },
  navtext:{
    fontSize:15,
     marginHorizontal:10,
      marginVertical:2,
      // marginLeft:100,
      alignSelf:"center",
       color:'#0D4C92',
       marginTop:30,
  },
  subView: {
    backgroundColor: 'yellow',
    height: 460,
    marginTop: 225,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  headerTxt: {
    fontSize: 35,
    marginLeft: 65,
    fontWeight: 'bold',
    color: 'red',
    position: 'absolute',
    marginTop: 100,
  },

  subTxt: {
    color: 'black',
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 40,
  },
  format:{
    marginLeft:20,
    marginTop:30,
    fontSize:16,
    fontWeight: 'bold',
  }

});