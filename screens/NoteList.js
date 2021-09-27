import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import TodoListItem from '../components/TodoListItem'


export default function NoteList({ navigation }) {

    const [todos, setTodos] = useState([
        { id: '1', title: 'task1', content: 'do the dishes' },
        { id: '2', title: 'task2', content: 'talk to the doctor' },
        { id: '3', title: 'stuff i like', content: 'pizza, picania and cookies' },
        { id: '4', title: 'medical summery', content: '*summerized medical*' },
        { id: '5', title: 'books', content: '12 rules for life \nthe subtle art of not giving a fuck \nbeyod order' },
        { id: '6', title: 'task1', content: 'do the dishes' },
        { id: '7', title: 'task2', content: 'talk to the doctor' },
        { id: '8', title: 'stuff i like', content: 'pizza, picania and cookies' },
        { id: '9', title: 'medical summery', content: '*summerized medical*' },
        { id: '10', title: 'books', content: '12 rules for life \nthe subtle art of not giving a fuck \nbeyod order' },
        { id: '11', title: 'medical summery', content: '*summerized medical*' },
    ])

    const todoListItemPressHandler = (item) => {
        navigation.navigate('EditNote', item)
        //navigation.push('EditNote')
    }

    return (
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                keyExtractor={(item) => item.id}
                data={todos}
                renderItem={({ item }) => (
                    <TodoListItem item={item} pressHandler={todoListItemPressHandler} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#202125',
    }
});
