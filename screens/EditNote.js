import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function EditNote({ navigation, editTodos }) {

    const [isNew, setIsNew] = useState(navigation.getParam('isNew'))
    const [currentId, setCurrentId] = useState(navigation.getParam('item').id)
    const [currentTitle, setCurrentTitle] = useState(navigation.getParam('item').title)
    const [currentContent, setCurrentContent] = useState(navigation.getParam('item').content)
    const upsertTodo = navigation.getParam('upsertTodo');
    const allTodos = navigation.getParam('todos');


    const pressHandler = () => {
        navigation.goBack()
        //navigation.pop()
    }

    const titleChangeHandler = (text) => {
        if (isNew) {
            setIsNew(false)
            setCurrentTitle(text)
            const generatedId = allTodos.length + 1
            setCurrentId(generatedId)
            const newTodo = {
                id: generatedId,
                title: text,
                content: currentContent
            }
            upsertTodo(newTodo)
        }
        else {
            setCurrentTitle(text)
            const newTodo = {
                id: currentId,
                title: text,
                content: currentContent
            }
            upsertTodo(newTodo)
        }
    }

    const contentChangeHandler = (text) => {
        if (isNew) {
            setIsNew(false)
            setCurrentContent(text)
            const generatedId = allTodos.length + 1
            setCurrentId(generatedId)
            const newTodo = {
                id: generatedId,
                title: currentTitle,
                content: text
            }
            upsertTodo(newTodo)
        }
        else {
            setCurrentContent(text)
            const newTodo = {
                id: currentId,
                title: currentTitle,
                content: text
            }
            upsertTodo(newTodo)
        }
    }

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.noteTitle}
                placeholder='Note'
                defaultValue={currentTitle}
                onChangeText={text => titleChangeHandler(text)}
            />

            <TextInput
                style={styles.noteContent}
                placeholder='Note'
                defaultValue={currentContent}
                onChangeText={text => contentChangeHandler(text)}
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
