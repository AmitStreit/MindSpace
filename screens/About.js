import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function About() {
    return (
        <View style={styles.text}>
            <Text style={styles.title}>about</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        color: '#111',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 100,
    },
});
