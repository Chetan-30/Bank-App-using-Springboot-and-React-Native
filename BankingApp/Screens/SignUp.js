import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';


const SignUp = ({navigation}) => {
    const [accNo, setAccNo] = useState("");
    const [uPassword, setUPassword] = useState("");
    const [uName, setUName] = useState("");
    const [uEmail, setUEmail] = useState("");
    const [uBalance ,setUBalance] = useState("");
    const [ifsc ,setIfsc] = useState("");
    const [value, setValue] = useState(null);
  // return (
  //   <View style={styles.container}>
  //     <ScrollView showsVerticalScrollIndicator={false}>
  //     <View style={{alignItems:'center'}}>
  //       <Image source={require('../assets/BankLogo.png')} style={{height:70,width:70}}></Image>
  //       <Text style={styles.headtext}>SignUp</Text>
  //     </View>
  //     <Text>________________________________________________</Text>
  //     <View style={{marginTop:30, marginBottom:40}}>
        
  //       <TextInput placeholder='Enter Account Number...' style={styles.TextInput} onChangeText={(e) =>setAccNo(e)} keyboardType='numeric'></TextInput>
        
  //       <TextInput placeholder='Enter Your Name...' style={styles.TextInput} onChangeText={(e) =>setUName(e)}></TextInput>
        
  //       <TextInput placeholder='Enter Your email...' style={styles.TextInput} onChangeText={(e) =>setUEmail(e)}></TextInput>
        
  //       <TextInput placeholder='Enter Your mobile number...' style={styles.TextInput} onChangeText={(e) =>setUPhoneNo(e)} keyboardType='numeric'></TextInput>
        
  //       <TextInput placeholder='Enter Your Account type...' style={styles.TextInput} onChangeText={(e) =>setAccount_type(e)}></TextInput>
        
  //       <TextInput secureTextEntry={true} placeholder='Enter Your Password...' style={styles.TextInput} onChangeText={(e) =>setUPassword(e)}></TextInput>
        
  //       <TextInput placeholder='Enter Initial Deposit...' style={styles.TextInput} onChangeText={(e) =>setUBalance(e)} keyboardType='numeric'></TextInput>
  //       
              // <Text style={styles.navtext} onPress={() => navigation.navigate("Login")}>Already have account? Login</Text>
  //       <TouchableOpacity style={styles.Btn} onPress={() =>Signup(accNo, uName, uEmail, uPhoneNo,account_type, uPassword, uBalance, navigation)}>
  //         <Text style={{color:'white', fontSize:18, margin:2}}>SignUp</Text>
  //       </TouchableOpacity>
  //     </View>
  //     </ScrollView>
  //     <StatusBar style="auto" />
  //   </View>
  // )

  const data123 = [{
    label: 'IFSC0013579',
    value: 'IFSC0013579',
  },{
    label: 'IFSC0024680',
    value: 'IFSC0024680',
  },{
    label: 'IFSC0012345',
    value:'IFSC0012345',
  },{
    label: 'IFSC0067890',
    value:'IFSC0067890',
  }];

  return (
    <View style={styles.cantainer}>
      <Text style={styles.headerTxt}>MY BANK</Text>
      <View style={styles.subView}>
        <Text style={styles.subTxt}>Signup</Text>
        <TextInput style={styles.nameInput} placeholder="Account Number" onChangeText={(e) =>setAccNo(e)} keyboardType='numeric'/>
        <TextInput style={styles.nameInput} placeholder="Name" onChangeText={(e) =>setUName(e)} />
        <TextInput style={styles.nameInput} placeholder="Email Address" onChangeText={(e) =>setUEmail(e)} />

        <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data123}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select IFSC"
        value={ifsc}
        onChange={item => {
          setIfsc(item.value);
        }}

      />

        {/* <TextInput style={styles.nameInput} placeholder="IFSC code" onChangeText={(e) =>setIfsc(e)} /> */}
        <TextInput style={styles.nameInput} placeholder="Enter Initial amount" onChangeText={(e) =>setUBalance(e)} keyboardType='numeric' />
        <TextInput style={styles.nameInput} placeholder="PIN code" secureTextEntry={true} onChangeText={(e) =>setUPassword(e)} />

        <TouchableOpacity style={styles.btn} onPress={() =>Signup(accNo, uName, uEmail,ifsc, uPassword, uBalance, navigation)}>
          <Text style={styles.btnTxt}>SignUp</Text>
        </TouchableOpacity>
        <View style={styles.endView}>
          <Text style={styles.endTxt}>Already have an account?</Text>
          <TouchableOpacity
            style={styles.endBtn}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginTxt}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );


}

const Signup = (accNo, uName, uEmail,ifsc, uPassword, uBalance, navigation) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    if(accNo == '' || uName == '' || uEmail == ''  || uPassword == '' || uBalance == '' || ifsc == ''){
        alert("Please provide all field !!");
    }else if(!/^[a-zA-Z]+$/i.test(uName)){
      alert("Enter Correct Name");
    }
    else if(accNo.length != 4){
        alert("Please provide 4 digit account number !!");
    }else if(uPassword.length != 4){
      alert("Please provide 4 digit PIN !!");
    }else if(reg.test(uEmail) == false){
        alert("Invalid email format !!");
    }else if(uBalance < 500){
        alert("Please deposit minimum 500 rs");
    }else{
        register(accNo, uName, uEmail,ifsc, uPassword, uBalance, navigation);
    }
}

const register = (accNo, uName, uEmail,ifsc, uPassword, uBalance, navigation) => {
    axios({
      method: 'POST',
      url: 'http://192.168.0.105:8085/Customer/createAcc', 
      data:{
        "acc_no": accNo,
        "name": uName,
        "email": uEmail,
        "password": uPassword,
        "balance": uBalance,
        "ifsc":ifsc,
    }
    }).then(function(response){
        console.log("response",JSON.stringify(response.data));
        alert(JSON.stringify(response.data));
        navigation.navigate("Login");
    }).catch(function(error){
        console.log("error",JSON.stringify(error));
        alert(JSON.stringify(error));
    })
}

export default SignUp

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: 'yellow',
//       alignItems: 'center',
//       paddingTop:40,
//     },
//     headtext: {fontSize:30, marginVertical:10, marginBottom:40,},
//     text:{fontSize:20, marginHorizontal:10, marginVertical:5, color:'#0D4C92'},
//     navtext:{fontSize:15, marginHorizontal:10, marginVertical:2, color:'#0D4C92'},
//     TextInput:{height:40, width:300,borderWidth:1, paddingLeft:20, borderRadius:10, margin:7, backgroundColor: 'white'},
//     Btn: {height:45, borderWidth:1,borderRadius:7, alignItems:'center', justifyContent:'center' ,backgroundColor:'#0D4C92',marginTop:15}
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
    height: 680,
    marginTop: 65,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  headerTxt: {
    fontSize: 40,
    marginLeft: 120,
    fontWeight: 'bold',
    color: 'red',
    position: 'absolute',
    marginTop: 5,
  },
 
  subTxt: {
    color: 'black',
    marginTop: 10,
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
    // color:"red",
    fontSize:16,
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
    marginRight:20,
  },
  dropdown: {
    marginTop:20,
    margin: 16,
    height: 50,
    width:290,
    marginLeft:40,
    marginBottom:1,
    borderBottomWidth: 1,
  },
  selectedTextStyle: {
    fontSize: 16,
  },

});