//import liraries
import { LinearGradient } from 'expo-linear-gradient';
import React, { Component, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// create a component
const Prompt = ({ navigation }) => {
    // const [billType, setBillType] = useState('')

    return (
        <LinearGradient
            style={styles.container}
            // Button Linear Gradient
            colors={['#085EB9', '#0093E9', '#80D0C7']}
        >
            <View >
                {/* <Text style={styles.title}>Hi,</Text> */}
                <Text style={styles.title}>Hi, How would you like to split your bill today</Text>
                <View style={styles.btns}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('NewBill',{billType:'equally'})} >
                        <Text style={styles.text}>EQUALLY</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('billAmount',{billType:'custom'})}>
                        <Text style={styles.text}>CUSTOM</Text>
                    </TouchableOpacity>
                </View>

            </View>
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
    btns: {
        alignItems: 'center',
        justifyContent: 'center',
        // marginBottom: 10,
        marginBottom: 60,
        // width: '100%'
    },
    text: {
        color: '#085EB9',
        fontWeight: '300',
    }
});

//make this component available to the app
export default Prompt;
