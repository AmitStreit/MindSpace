import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={styles.header}>
            <MaterialIcons name="menu" size={24} color="black" />
            <Text style={styles.title}>amit todos</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        paddingTop: 27,
        backgroundColor: '#047013',
        flexDirection: "row",
    },
    title: {
        //fontFamily: 'rubik-bold',
        textAlign: 'center',
        color: '#111',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 125,
    },
});
