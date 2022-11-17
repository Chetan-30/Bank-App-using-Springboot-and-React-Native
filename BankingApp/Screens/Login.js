import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';

const Login = ({navigation}) => {
    const [accNo, setAccNo] = useState("");
    const [ uPassword, setUPassword] = useState("");
  // return (
  //   <View style={styles.container}>
  //     <View style={{alignItems:'center'}}>
  //       <Image source={require('../assets/BankLogo.png')} style={{height:70,width:70}}></Image>
  //       <Text style={styles.headtext}>Login</Text>
  //     </View>
      
  //     <View style={{marginTop:30, marginBottom:40}}>
        
  //       <TextInput placeholder='Enter Account Number...' style={styles.TextInput} onChangeText={(e) =>setAccNo(e)}></TextInput>
        
  //       <TextInput placeholder='Enter Your Password...' style={styles.TextInput} onChangeText={(e) =>setUPassword(e)}></TextInput>
  //       <Text style={styles.navtext} onPress={() => navigation.navigate("ForgotPass")}>Forgot Password?</Text>
  //       <Text style={styles.navtext} onPress={() => navigation.navigate("SignUp")}>SignUp</Text>
  //       <TouchableOpacity style={styles.Btn} onPress={() =>LogIn(accNo, uPassword, navigation)}>
  //         <Text style={{color:'white', fontSize:18, margin:2}}>LOGIN</Text>
  //       </TouchableOpacity>
  //     </View>
  //     <StatusBar style="auto" />
  //   </View>
  // )

  return (
    <View style={styles.cantainer}>
      <Text style={styles.headerTxt}>WELCOME</Text>
      <Text style={styles.headerTxt1}>To</Text>
      <Text style={styles.headerTxt2}>My BANK</Text>
      <View style={styles.subView}>
        <Text style={styles.subTxt}>Login</Text>
        <TextInput style={styles.nameInput} placeholder="Enter Account Number" onChangeText={(e) =>setAccNo(e)} />
        <TextInput style={styles.nameInput} placeholder="PIN CODE" secureTextEntry={true} onChangeText={(e) =>setUPassword(e)} />
        
        <Text style={styles.navtext} onPress={() => navigation.navigate("ForgotPass")}>Forgot PIN?</Text>
        
        <TouchableOpacity style={styles.btn} onPress={() =>LogIn(accNo, uPassword, navigation)}>
          <Text style={styles.btnTxt}>Login</Text>
        </TouchableOpacity>
        <View style={styles.endView}>
          <Text style={styles.endTxt}>Create an account?</Text>
          <TouchableOpacity
            style={styles.endBtn}
            onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.loginTxt}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );


}

const LogIn = (accNo, uPassword, navigation) =>{
  if(accNo == '' || uPassword == ''){
    alert('Please provide all fields !!');
  }else if(accNo.length != 4){
    alert('Enter 4 digits Account Number');
  }else if(uPassword.length != 4){
    alert('Enter 4 digits PIN Code');
  }else{
    axios({
      method:'GET',
      url: 'http://192.168.0.105:8085/Customer/getAccount/login/'+accNo,
    }).then(function(response){
       console.log("response", response.data.password);
       if(accNo == response.data.acc_no && uPassword == response.data.password){
        alert("Login Successfull !!");
        navigation.navigate("Home",{
          accNo: response.data.acc_no,
          uName: response.data.name,
          password: response.data.password,
          ifsc: response.data.ifsc,
          email: response.data.email,
          uBalance: response.data.balance,
        });
      }else {
        alert("Wrong Credentials !");
      }
    }).catch(function(error){
      console.log("error",error);
    })
  }
  
}

export default Login

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: 'yellow',
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
    height: 430,
    marginTop: 250,
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
  headerTxt1: {
    fontSize: 40,
    marginLeft: 180,
    fontWeight: 'bold',
    color: 'red',
    position: 'absolute',
    marginTop: 105,
  },
  headerTxt2: {
    fontSize: 40,
    marginLeft: 125,
    fontWeight: 'bold',
    color: 'red',
    position: 'absolute',
    marginTop: 170,
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
});