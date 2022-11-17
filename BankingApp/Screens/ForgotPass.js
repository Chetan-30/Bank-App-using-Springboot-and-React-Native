import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';

const ForgotPass = ({navigation}) => {
    const [accNo, setAccNo] = useState("");
    const [uEmail, setUEmail] = useState("");
    const [ uPassword, setUPassword] = useState("");
    const [ uPassword1, setUPassword1] = useState("");


  //   return (
  //   <View style={styles.container}>
  //     <View style={{alignItems:'center'}}>
  //       <Image source={require('../assets/BankLogo.png')} style={{height:70,width:70}}></Image>
  //       <Text style={styles.headtext}>Update Password</Text>
  //     </View>
  //     <Text>________________________________________________</Text>
  //     <View style={{marginTop:30, marginBottom:40}}>
  //       <Text style={styles.text}>Enter Account Number:</Text>
  //       <TextInput placeholder='Enter Account Number...' style={styles.TextInput} onChangeText={(e) =>setAccNo(e)}></TextInput>
  //       <Text style={styles.text}>Enter Your Email:</Text>
  //       <TextInput placeholder='Enter Your email...' style={styles.TextInput} onChangeText={(e) =>setUEmail(e)}></TextInput>
  //       <Text style={styles.text}>Enter Password:</Text>
  //       <TextInput placeholder='Enter Your Password...' style={styles.TextInput} onChangeText={(e) =>setUPassword(e)}></TextInput>
  //       <Text style={styles.navtext} onPress={() => navigation.navigate("Login")}>back to Login</Text>
  //       <TouchableOpacity style={styles.Btn} onPress={() =>updatePass(accNo, uPassword, uEmail)}>
  //         <Text style={{color:'white', fontSize:18, margin:2}}>Update</Text>
  //       </TouchableOpacity>
  //     </View>
  //     <StatusBar style="auto" />
  //   </View>
  // )

  return (
    <View style={styles.cantainer}>
      <Text style={styles.headerTxt}>MY BANK</Text>
      <View style={styles.subView}>
        <Text style={styles.subTxt}>Update PIN CODE</Text>
        <TextInput style={styles.nameInput} placeholder="Enter Account Number" onChangeText={(e) =>setAccNo(e)} />
        <TextInput style={styles.nameInput} placeholder="Enter Email address" onChangeText={(e) =>setUEmail(e)} />
        <TextInput style={styles.nameInput} placeholder="Enter New PIN CODE" secureTextEntry={true} onChangeText={(e) =>setUPassword(e)} />
        <TextInput style={styles.nameInput} placeholder="Confirm PIN CODE" secureTextEntry={true} onChangeText={(e) =>setUPassword1(e)} />
        
        <Text style={styles.navtext} onPress={() => navigation.navigate("Login")}>Back to Login</Text>
        
        <TouchableOpacity style={styles.btn} onPress={() =>updatePass(accNo, uPassword, uEmail,uPassword1)}>
          <Text style={styles.btnTxt}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );


}


const updatePass = (accNo, uPassword, uEmail, uPassword1) => {
    const regpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    if(accNo == "" || uPassword == "" || uEmail == ""){
        alert("Please provide all fields !!");
    }else if(uPassword != uPassword1){
      alert("Please recheck your Password");
    }
    else{
        axios({
            method:'POST',
            url: 'http://192.168.0.105:8085/Customer/updatePassword/' + accNo + '/' + uEmail + '/' + uPassword,
        }).then(function(response){
            console.log("response", JSON.stringify(response.data));
            alert( JSON.stringify(response.data));
        })
    }
}



export default ForgotPass

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#cafaf5',
//       alignItems: 'center',
//       paddingVertical:40,
//     },
//     headtext: {fontSize:30, marginVertical:10, marginBottom:40,},
//     text:{fontSize:20, marginHorizontal:10, marginVertical:5, color:'#0D4C92'},
//     navtext:{fontSize:15, marginHorizontal:10, marginVertical:2, color:'#0D4C92'},
//     TextInput:{height:40, width:300,borderWidth:1, paddingLeft:20, borderRadius:10, margin:7, backgroundColor: 'white'},
//     Btn: {height:45, borderWidth:1, borderRadius:7, alignItems:'center', justifyContent:'center' ,backgroundColor:'#0D4C92',marginTop:15}
//   });

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
    height: 530,
    marginTop: 150,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  headerTxt: {
    fontSize: 40,
    marginLeft: 120,
    fontWeight: 'bold',
    color: 'red',
    position: 'absolute',
    marginTop: 40,
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
    fontSize:17,
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
});