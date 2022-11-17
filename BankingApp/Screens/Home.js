import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import Deposit from './Deposit';

const Home = ({navigation, route}) => {
  const [accNo, setAccNo] = useState(route.params.accNo);
  const uName = route.params.uName ;
  const password = route.params.password ;
  const ifsc = route.params.ifsc ;
  const email = route.params.email ;
  const bal = route.params.uBalance ;
  const [uBalance ,setUBalance] = useState("");

  const balance = (accNo) => {
    axios({
      method:'GET',
      url: 'http://192.168.0.105:8085/Customer/viewBalance/'+accNo,
    }).then(function(response){
      alert(JSON.stringify(response.data));
      // setUBalance((JSON.stringify(response.data)));
    }).catch(function(error){
      console.log("error",error);
    })
  }

  // return (
  //   <View style={styles.container}>
  //     <View style={styles.headview}>
  //       <View style={{flexDirection: 'row',}}>
  //         <Image source={require('../assets/BankLogo.png')} style={{height:70,width:70,tintColor:'white'}}></Image>
  //         <Text style={styles.headtext}>My Bank</Text>
  //       </View>
  //       <Text style={[styles.userDetails,{fontSize:25}]}>Welcome ! {uName}</Text>
  //       <Text style={styles.userDetails}>{uBalance}</Text>
  //     </View>
  //     <View style={styles.container}>
  //       <Text style={[styles.textHome,{marginTop:30}]}>Select Operation to perform</Text>
  //       <View style={{marginTop:30}}>
  //         <TouchableOpacity style={styles.Btn} onPress={() => balance(accNo)}>
  //           <Text style={{color:'white', fontSize:18, margin:2}}>View Balance</Text>
  //         </TouchableOpacity>
  //         <TouchableOpacity style={styles.Btn} onPress={() => {navigation.navigate("Deposit",{accNo ,uName});setUBalance("");}}>
  //           <Text style={{color:'white', fontSize:18, margin:2}}>Deposit Amount</Text>
  //         </TouchableOpacity>
  //         <TouchableOpacity style={styles.Btn} onPress={() => {navigation.navigate("Withdraw",{accNo ,uName});setUBalance("");}}>
  //           <Text style={{color:'white', fontSize:18, margin:2}}>Withdraw Amount</Text>
  //         </TouchableOpacity>
  //         <TouchableOpacity style={styles.Btn} onPress={() => {navigation.navigate("Transfer",{accNo ,uName});setUBalance("");}}>
  //           <Text style={{color:'white', fontSize:18, margin:2}}>Transfer Amount</Text>
  //         </TouchableOpacity>
  //         <TouchableOpacity style={styles.Btn} onPress={() => {navigation.navigate("History",{accNo ,uName});setUBalance("");}}>
  //           <Text style={{color:'white', fontSize:18, margin:2}}>Transaction History</Text>
  //         </TouchableOpacity>
  //       </View>
  //     </View>
  //     <StatusBar style="auto" />
  //   </View>
  // )

  return (
    <View style={styles.cantainer}>
      <Text style={styles.headerTxt}>WELCOME {uName}</Text>
      {/* <Text style={styles.headerTxt}>{uBalance}</Text> */}
      {/* alert(uBalance); */}
      <View style={styles.subView}>
        <Text style={styles.subTxt}>Select Operation</Text>
        
        <View style={styles.container}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => balance(accNo)}>
                <Text style={{color:'blue', fontSize:18, margin:2}}>View Balance</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("ViewDetails",{accNo,uName,ifsc,email,password,bal})}>
                <Text style={{color:'blue', fontSize:18, margin:2}}>View Details</Text>
                </TouchableOpacity>
              </View>
        </View>
        <View style={styles.container}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => {navigation.navigate("Deposit",{accNo,uName,ifsc,email,password});setUBalance("");}}>
                <Text style={{color:'blue', fontSize:18, margin:2}}>DEPOSIT</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => {navigation.navigate("Withdraw",{accNo,uName});setUBalance("");}}>
                <Text style={{color:'blue', fontSize:18, margin:2}}>WITHDRAW</Text>
                </TouchableOpacity>
              </View>
        </View>
        <View style={styles.container}>
              <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => {navigation.navigate("Transfer",{accNo,uName});setUBalance("");}}>
              <Text style={{color:'blue', fontSize:18, margin:2}}>TRANSFER</Text>
              </TouchableOpacity >
              </View>
              <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => {navigation.navigate("History",{accNo,uName});setUBalance("");}}>
              <Text style={{color:'blue', fontSize:18, margin:2}}>Transaction History</Text>
              </TouchableOpacity >
              </View>
        </View>
        <View style={styles.container}>
              
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => {navigation.navigate("Login")}}>
              <Text style={{color:'blue', fontSize:18, margin:2}}>LOG OUT</Text>
              </TouchableOpacity>
              </View>
        </View>


      </View>
    </View>
  );



}

export default Home

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
    backgroundColor: 'white',
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
  nameInput: {
    height: 40,
    width: 290,
    marginLeft: 40,
    borderBottomWidth: 1,
    marginTop: 30,
  },
  btn: {
    height: 50,
    width: 200,
    backgroundColor: 'blue',
    borderRadius: 80,
    borderWidth: 2,
    marginLeft: 100,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  endView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  endTxt: {
    fontSize: 15,
    marginTop: 30,
    marginLeft: 80,
    fontWeight: 'bold',
  },
  endBtn: {
    marginRight: 70,
  },
  loginTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 24,
    marginRight:49,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
},
  buttonContainer: {
    // flex: 1,
    height: 50,
    width: 175,
    backgroundColor: '#ffffcc',
    borderRadius: 80,
    borderWidth: 2,
    marginLeft: 20,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

});