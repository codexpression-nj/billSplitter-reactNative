//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

// create a component
const NewBill = () => {
    expense = [{expenseName:'', members:{}, amount :0, splitType:''},
                {expenseName:'', members:{}, amount :0, splitType:''},]
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
            <Text style={styles.text}>NAME</Text>
            <TextInput style={styles.input} placeholder='Name'/>
            <Text style={styles.text}>ADD MEMBERS</Text>
            <TextInput style={styles.input} placeholder='Name'/>
            <Text style={styles.text}>AMOUNT</Text>
            <TextInput style={styles.input} placeholder='Name'/>
            <Text style={styles.text}>TIP</Text>
            <TextInput style={styles.input} placeholder='Name'/>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={{ color:'white'}}>CREATE BILL</Text>
                <AntDesign name="arrowright" size={24} color="white" />
            </TouchableOpacity>
         
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // margin:16,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
    },
    input:{
        // width:190,
        borderRadius:5,
        borderWidth : 1,
        padding:12,
        marginBottom:16,
        borderColor:'#E5E9ED'
    },
    text:{
        color:'#085EB9'
    },
    inputContainer:{
        flex: 1,
        margin:16,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
    },
    button:{
        justifyContent:"space-between",
        alignSelf:'center',
        backgroundColor:'#085EB9',
        width: 200,
        height:50,
        alignItems:"center",
        borderRadius:5,
        flexDirection:"row",
        padding:10,margin:10
       
    }
});

//make this component available to the app
export default NewBill;
