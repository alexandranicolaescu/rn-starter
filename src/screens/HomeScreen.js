import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = ({ navigation }) => {
  

  return ( 
    <View>
      <Text style={styles.text}> Surprise! </Text>
      <Button 
        onPress = {() => navigation.navigate('Components')}
        title = "Go to Components Demo"
      />

      <Button
        title = "Go to List Demo"
        onPress = {() => navigation.navigate('List')}

      />

      <Button
        title = "Go to Image Demo"
        onPress = {() => navigation.navigate('Image')}

      />

      <Button
        title = "Go to Counter Demo"
        onPress = {() => navigation.navigate('Counter')}

      />

      <Button
        title = "Go to Color Demo"
        onPress = {() => navigation.navigate('Color')}

      />

      <Button
        title = "Go to Square Demo"
        onPress = {() => navigation.navigate('Square')}

      />

      {/*<TouchableOpacity onPress = {() => navigation.navigate('List')}>
          <Text> Go to List Demo </Text>
        </TouchableOpacity>*/}

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50
  }
});

export default HomeScreen;

