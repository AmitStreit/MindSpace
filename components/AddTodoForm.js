import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';

export default function AddTodoForm({ submitHandler }) {
    const [text, setText] = useState();

    const typingHandler = (value) => {
        setText(value)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Note'
                onChangeText={typingHandler}
            />
            <Button onPress={() => submitHandler(text)} title='add todo' color='#047013' />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        width: 200,
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#414246',
        color: '#FEFFFF'
    }
});
