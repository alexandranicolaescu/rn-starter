import React from 'react';
import {Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = '^^';
    const name = <Text> Lexi </Text>;
    
    return (
    <View>
        <Text style = {styles.textStyle}> You're a goojybooboo </Text>
        <Text style = {{ fontSize:50 }}> {greeting} </Text>
        <Text style = {styles.exerciseStyle1}> Getting started with React Native! </Text>
        <Text style = {styles.exerciseStyle2}> My name is {name} </Text>
    
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50
    },

    exerciseStyle1: {
        fontSize: 45
    },

    exerciseStyle2: {
        fontSize: 20
    }

    
});

export default ComponentsScreen;


