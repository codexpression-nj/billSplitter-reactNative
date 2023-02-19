//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// create a component
const SignIn = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            {/* <Text style={styles.text}>EMAIL</Text> */}
            <TextInput style={styles.input} keyboardType='numeric' placeholder='Email' />
            <TextInput style={styles.input} keyboardType='numeric' placeholder='Password' />
            <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('prompt')}>
                <Text style={{fontWeight:'bold',color:'white'}}>Sign In</Text>
            </TouchableOpacity>
            <View style={{display:'flex', flexDirection:'row'}}> 
            <Text style={{color:'#085EB9'}}>Don't have an account?  </Text>
            <TouchableOpacity>
                <Text style={{textDecorationLine:'underline',color:'#085EB9'}} onPress={()=> navigation.navigate('signup')}>Sign up</Text>
            </TouchableOpacity>
            </View>
           
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    inputContainer: {
        // flex: 1,
        margin: 16,
        backgroundColor: 'white',
    },
    input: {
        width:'80%',
        borderRadius: 5,
        borderWidth: 1,
        padding: 12,
        marginBottom: 24,
        borderColor: '#E5E9ED',
        color:'white'
    },
    title:{
        fontSize:28,
        color:'#085EB9',
        fontWeight:'bold',
        marginBottom:80
    },
    btn:{
        borderRadius: 6,
        borderColor:'white',
        borderWidth:1,
        margin:5,
        padding:15,
        width: '80%',
        backgroundColor:'#085EB9',
        // height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },   text: {
        color: '#085EB9',
        fontWeight: '300',
        marginBottom: 6
    },
});

//make this component available to the app
export default SignIn;
