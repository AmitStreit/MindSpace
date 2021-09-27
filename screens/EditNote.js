import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
//import { useFocusEffect } from '@react-navigation/native';

export default function EditNote({ navigation }) {

    const pressHandler = () => {
        navigation.goBack()
        //navigation.pop()
    }

    //const saveNotesChanges = navigation.addListener('componentWillUnmount', (e) => {
    //    // Prevent default action
    //    //e.preventDefault();
    //    console.log('oh yhea!!')
    //});

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.noteTitle}
                placeholder='Note'
                defaultValue={navigation.getParam('title')}
            //onChangeText={typingHandler}
            />

            <TextInput
                style={styles.noteContent}
                placeholder='Note'
                defaultValue={navigation.getParam('content')}
            //onChangeText={typingHandler}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202125',
    },
});
