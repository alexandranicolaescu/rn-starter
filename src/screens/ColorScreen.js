import React, {useState} from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ColorScreen = () => {
    const [color, SetColors] = useState([]);
    console.log(colors);

    return (
        <View>
            <Button 
                title = "Add a Color"
                onPress = {() => {
                    SetColors([...colors, randomRgb()]);
                }} 
            />
            <View 
                style = {{ height: 100, width: 100, backgroundColor: randomRgb() }} 
            />
        </View>
    );
};

const randomRgb = () => {
    const red = Math.floor(Math.random() *256);
    const green = Math.floor(Math.random() *256);
    const blue = Math.floor(Math.random() *256);

    return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;