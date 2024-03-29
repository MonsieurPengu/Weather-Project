// This is a scratch code fragment for C <-> F switch.
import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

export default function App() {
    const [isSwitchEnabled, setSwitch] = React.useState(false)

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Scuffed Scratch Switch</Text>
            <Switch
                value={isSwitchEnabled}
                onValueChange={(value) => setSwitch(value)}
                trackColor={{true: 'blue'}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        background: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: "100",
        color: "#161616"
    }
});
