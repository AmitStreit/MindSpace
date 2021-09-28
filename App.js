import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/NoteListStack'

export default function App() {

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


    return (
        <Navigator />
    );
}

const styles = StyleSheet.create({
    /* container: {
        backgroundColor: '#202125',
    }, */
});
