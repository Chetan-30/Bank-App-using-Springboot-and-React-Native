import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList,} from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';

const History = ({navigation,route}) => {
    const  accNo = route.params.accNo;
    const  uName = route.params.uName;
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        loadhistory();
    }, []);

    const loadhistory = async () => {
        const response = await axios.get("http://192.168.0.105:8085/Customer/history/" + accNo);
        console.log(response.data);
        setTransactions(response.data);
    }

//   return (
//     <View style={[styles.container,{alignItems:'center'}]}>
//         <View style={styles.headview}>
//             <View style={{flexDirection: 'row',}}>
//                 <Image source={require('../assets/BankLogo.png')} style={{height:70,width:70,tintColor:'white'}}></Image>
//                 <Text style={styles.headtext}>MoneyMoney</Text>
//             </View>
//             <Text style={[styles.userDetails,{fontSize:25}]}>Welcome ! {uName}</Text>
//         </View>
//         <View style={styles.container}>
//             <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:30}}>
//                 <Text style={[styles.tbcell,{backgroundColor:'#0D4C92',color:'white'}]}>Sender</Text>
//                 <Text style={[styles.tbcell,{backgroundColor:'#0D4C92',color:'white'}]}>Receiver</Text>
//                 <Text style={[styles.tbcell,{backgroundColor:'#0D4C92',color:'white'}]}>Amount</Text>
//                 <Text style={[styles.tbcell,{backgroundColor:'#0D4C92',color:'white'}]}>Type</Text>
//             </View>  
//             <FlatList data={transactions} renderItem={(e) => {
//                 return  <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
//                             <Text style={styles.tbcell}>{e.item.acc_no}</Text>
//                             <Text style={styles.tbcell}>{e.item.receiverAcc_no}</Text>
//                             <Text style={styles.tbcell}>{e.item.amount}</Text>
//                             <Text style={styles.tbcell}>{e.item.type}</Text>
//                         </View>
//             }} />  
//         </View>
//     </View>
//   )

return (
    <View style={styles.cantainer}>
      <Text style={styles.headerTxt}>MY BANK</Text>
      <View style={styles.subView}>
        <Text style={styles.subTxt}>Transaction History</Text>
        
        
                 <View style={styles.container}>
             <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:30}}>
                 <Text style={[styles.tbcell,{backgroundColor:'white',color:'black',fontWeight:"bold"}]}>Sender</Text>
                 <Text style={[styles.tbcell,{backgroundColor:'white',color:'black',fontWeight:"bold"}]}>Receiver</Text>
                 <Text style={[styles.tbcell,{backgroundColor:'white',color:'black',fontWeight:"bold"}]}>Type</Text>
                 <Text style={[styles.tbcell,{backgroundColor:'white',color:'black',fontWeight:"bold"}]}>Amount</Text>
             </View>  
             <FlatList data={transactions} renderItem={(e) => {
                 return  <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                             <Text style={styles.tbcell}>{e.item.acc_no}</Text>
                             <Text style={styles.tbcell}>{e.item.receiverAcc_no}</Text>
                             <Text style={styles.tbcell}>{e.item.type}</Text>
                             <Text style={styles.tbcell}>{e.item.amount}</Text>
                         </View>
             }} />  
         </View>
         
        

       

       
      </View>
    </View>
  );



}

export default History

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
      marginTop: 200,
      borderTopRightRadius: 40,
      borderTopLeftRadius: 40,
    },
    headerTxt: {
      fontSize: 40,
      marginLeft: 120,
      fontWeight: 'bold',
      color: 'red',
      position: 'absolute',
      marginTop: 50,
    },
    tbcell:{
        borderWidth:1,
        borderRadius:1,
        width:80,height:30,
        paddingLeft:15,
        paddingTop:5,
        // borderRadius:5,
        backgroundColor:'yellow',
        color:"red",
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