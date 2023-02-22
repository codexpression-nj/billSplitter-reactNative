//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// create a component
const AmountSpent = ({navigation}) => {
    return (
        <LinearGradient
        style={styles.container}
        // Button Linear Gradient
        colors={['#085EB9', '#0093E9', '#80D0C7']}
    >
        {/* <View > */}
            <Text style={styles.title}>what is the total amount spent </Text>
            <TextInput style={styles.input} keyboardType='numeric' placeholder='Amount' />
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('NewBill',{billType:'custom'})}>
                        <Text style={styles.text}>Proceed</Text>
                    </TouchableOpacity>
        {/* </View> */}
        </LinearGradient>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#085EB9',
        width: '100%',
    },
    input: {
        width: '80%',
        borderRadius: 5,
        borderWidth: 1,
        padding: 12,
        marginBottom: 24,
        borderColor: '#E5E9ED',
        color: 'white'
    },
    title: {
        color: 'white',
        fontSize: 34,
        margin: 30,
        fontWeight: 'bold'
    },
    btn: {
        width: '90%',
        height: 40,
        borderRadius: 6,
        backgroundColor: 'white',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        // marginBottom: 10
    },
});

//make this component available to the app
export default AmountSpent;
