import React from 'react';
import { View, Text, StyleSheet } from 'react-native';  // import the View, Text, and StyleSheet components from react-native                               
import { useNavigation } from '@react-navigation/native'; // import the useNavigation hook from @react-navigation/native

const NavBar = () => {
    return ((
        <View style={styles.navbar}>
            <Text style={styles.text}>My App</Text>
        </View>
    ))

}

export default NavBar;  