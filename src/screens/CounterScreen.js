import React, {useState} from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);


    return (
        <View>
            <Button 
                title = "Increase" 
                onPress = {() => {
                    //Don't do like this!
                    //counter++;
                    setCounter(counter + 1);
                }}    
            />
            <Button 
                title = "Decrease" 
                onPress = {() => {
                    // counter--;
                    setCounter(counter - 1);
                }}
            />
            <Text> Current Count: {counter} </Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;