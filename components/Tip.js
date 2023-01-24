//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const Tip = (tip) => {
    // console.log(tipAmnt);
    const [selectedTip, setSelectedTip]= useState(0)
    console.log(selectedTip);
    return (
        <View style={{flexDirection:"row", flexWrap:'wrap'}} >
            <TouchableOpacity style={styles.container} onPress={() =>setSelectedTip(10)}>
                <Text style={styles.text}>10%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}  onPress={() =>setSelectedTip(20)}>
                <Text  style={styles.text}>20%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}  onPress={() =>setSelectedTip(30)}>
                <Text  style={styles.text}>30%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}  onPress={() =>setSelectedTip(40)}>
                <Text  style={styles.text}>40%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}  onPress={() =>setSelectedTip(50)}>
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
