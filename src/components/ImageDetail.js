import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'


const ImageDetail = ({imageSource, title, imageRating}) => {
    return (
        <View>
            <Image source = {imageSource} />
            <Text> {title} </Text>
            <Text> Image score - {imageRating} </Text>
        </View> 
    );
};

const styles = StyleSheet.create({});

export default ImageDetail;