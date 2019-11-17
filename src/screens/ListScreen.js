import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const ToDo = [
        {name: 'Kiss', level: 1},
        {name: 'Adam', level: 2},
        {name: 'A.K.A.', level: 3},
        {name: 'Goojy-', level: 4},
        {name: 'Boo-', level: 5},
        {name: 'Boo', level: 6},
        {name: 'Right', level: 7},
        {name: 'Now', level: 8},
        
    ];


    return (
        <FlatList 
            // horizontal = {true}
            //showsHorizontalScrollIndicator = {false}                  //ascunzi bara de navigare de jos
            keyExtractor = {task => task.name}
            data = {ToDo}
            renderItem = { ({item}) => {  
                return <Text style = {styles.textStyle}> {item.name} Level - {item.level}</Text>
                      
                
                 //renderItem = { (element) => {} } 
                //element = { item: { name: 'Friend #1' }, index: 0}
                //item = { name: 'Friend #1' }
            
            }}
        />
    )
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }

});

export default ListScreen;
