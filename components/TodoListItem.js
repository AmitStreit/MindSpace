import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function TodoListItem({ item, pressHandler }) {
    return (
        //<TouchableOpacity style={styles.todoListItem} onPress={() => pressHandler(item.id)}>
        //    <Text style={styles.todoListItemTitle}>{item.title}</Text>
        //    <Text style={styles.todoListItemContent}>{item.content}</Text>
        //</TouchableOpacity>
        <TouchableOpacity style={styles.todoListItem} onPress={() => pressHandler(item)}>
            <Text style={styles.todoListItemTitle}>{item.title}</Text>
            <Text style={styles.todoListItemContent}>{item.content}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    todoListItem: {
        //flex: 1,
        width: 180,
        marginTop: 11,
        marginHorizontal: 6,
        padding: 14,
        borderColor: '#414246',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
        backgroundColor: '#202125',
    },
    todoListItemTitle: {
        //fontFamily: 'rubik-bold',
        fontSize: 25,
        color: '#FEFFFF',
    },
    todoListItemContent: {
        //fontFamily: 'rubik-regular',
        fontSize: 20,
        color: '#FEFFFF',
        marginTop: 2,
    },
});
