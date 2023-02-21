//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const AmountSpent = () => {
    return (
        <View style={styles.container}>
            <Text>AmountSpent</Text>
        </View>
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
});

//make this component available to the app
export default AmountSpent;
