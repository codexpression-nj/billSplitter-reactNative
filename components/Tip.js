//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const Tip = () => {
    return (
        <View style={{flexDirection:"row", flexWrap:'wrap'}}>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}>10%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}>
                <Text  style={styles.text}>20%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}>
                <Text  style={styles.text}>30%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}>
                <Text  style={styles.text}>40%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}>
                <Text  style={styles.text}>50%</Text>
            </TouchableOpacity>
      
        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 40,
        borderRadius: 6,
        backgroundColor: 'white',
        borderColor:'#085EB9',
        borderWidth:1,
        margin:5,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:'#085EB9'
    }
});

//make this component available to the app
export default Tip;
