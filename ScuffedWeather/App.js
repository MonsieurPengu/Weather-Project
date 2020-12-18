import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

// FOR IOS := View -> UIView
// FOR ANDROID := View -> AndroidView
// This maps the components into native widgets of the OS app is running on. 
// This is called a "platform independent way" or "real native apps".
export default function App() {
    // let x = 1;
    console.log("App executed");
    
    return (
        <SafeAreaView style={styles.container}>
            <Text>Yepcock.</Text>
        </SafeAreaView>
    );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'dodgerblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
});