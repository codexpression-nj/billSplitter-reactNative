//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// create a component
const SignIn = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <TextInput style={styles.input} keyboardType='numeric' placeholder='Email' />
            <TextInput style={styles.input} keyboardType='numeric' placeholder='Password' />
            <TouchableOpacity style={styles.btn}>
                <Text>Sign in</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#085EB9',
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
        color:'white',
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
        backgroundColor:'white',
        // height: 30,
        alignItems: 'center',
        justifyContent: 'center',

    }
});

//make this component available to the app
export default SignIn;
