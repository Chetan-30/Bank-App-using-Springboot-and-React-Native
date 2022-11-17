import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';

const Withdraw = ({navigation,route}) => {
  const accNo = route.params.accNo;
  const uName = route.params.uName ;

    const [amount, setAmount] = useState("");

    const withdraw = (accNo) => {

      if(isNaN(amount)){
        alert("Enter valid amount");
      }else{

        axios({
            method: 'POST',
            url: 'http://192.168.0.105:8085/Customer/withdraw/' + accNo +"/"+ amount, 
        }).then(function(response){
            alert(JSON.stringify(response.data));
            setAmount("");
            navigation.navigate("Home",{uName});
        }).catch(function(error){
            console.log("error", error);
        })
    }
  }
//   return (
//     <View style={[styles.container,{alignItems:'center'}]}>
//             <View style={styles.headview}>
//                 <View style={{flexDirection: 'row',}}>
//                     <Image source={require('../assets/BankLogo.png')} style={{height:70,width:70,tintColor:'white'}}></Image>
//                     <Text style={styles.headtext}>MoneyMoney</Text>
//                 </View>
//                 <Text style={[styles.userDetails,{fontSize:25}]}>Welcome ! {uName}</Text>
//             </View>
//             <View style={{marginTop:30, marginBottom:40}}>
//                 <Text style={styles.text}>Enter Amount for Withdrawl:</Text>
//                 <TextInput placeholder='Enter Amount...' value={amount} style={styles.TextInput} onChangeText={(e) => setAmount(e)} keyboardType='numeric'></TextInput>
//                 <TouchableOpacity style={styles.Btn} onPress={() => withdraw(accNo)}>
//                     <Text style={{color:'white', fontSize:18, margin:2}}>Withdraw</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//   )

return (
    <View style={styles.cantainer}>
 <Text style={styles.headerTxt}>WELCOME {uName}</Text>
      <View style={styles.subView}>
        <Text style={styles.subTxt}>Withdraw</Text>
        <TextInput style={styles.nameInput} placeholder="Enter Amount to Withdraw" value={amount} onChangeText={(e) => setAmount(e)} keyboardType='numeric' />
 
        <TouchableOpacity style={styles.btn} onPress={() => withdraw(accNo)}>
          <Text style={styles.btnTxt}>Withdraw</Text>
        </TouchableOpacity>

      </View>
    </View>
  );

}

export default Withdraw

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'yellow',
//         paddingHorizontal:5
//       },
//       userDetails: {color:'white', fontSize:20, marginVertical:3},
//         textHome: {color:'#0D4C92', fontSize:20, marginVertical:3},
//         headview:{backgroundColor:'#0D4C92',marginTop:45, paddingTop:40, paddingHorizontal:20, paddingBottom:30,borderRadius:30, borderBottomRightRadius:80,},
//         headtext: {fontSize:40, marginVertical:10,marginHorizontal:20, marginBottom:40,color:'white'},
//         text:{fontSize:20, marginHorizontal:10, marginVertical:5, color:'#0D4C92'},
//         navtext:{fontSize:15, marginHorizontal:10, marginVertical:2, color:'#0D4C92'},
//         TextInput:{height:40, width:300,borderWidth:1, paddingLeft:20, borderRadius:10, margin:7, backgroundColor: 'white'},
//         Btn: {height:45, borderWidth:1, borderRadius:7, alignItems:'center', justifyContent:'center' ,backgroundColor:'#0D4C92',marginVertical:14},
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
      height: 430,
      marginTop: 250,
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