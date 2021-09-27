import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header'
import TodoListItem from './components/TodoListItem'
import AddTodoForm from './components/AddTodoForm'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';

const getFonts = () => Font.loadAsync({
    'rubik-regular': require('./assets/fonts/Rubik-Regular.ttf'),
    'rubik-bold': require('./assets/fonts/Rubik-Bold.ttf')
})

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

    const [fontsLoaded, setFontsLoaded] = useState(false)

    const todoListItemPressHandler = (id) => {
        setTodos((previosTodos) => {
            return previosTodos.filter(todo => todo.id != id)
        })
    }

    const addTodoFormSubmitHandler = (text) => {
        setTodos((previosTodos) => {
            return [
                { id: Math.random.toString, title: 'no title', content: text },
                ...previosTodos
            ]
        })
        //Alert.alert('Alert title','alert massage',[
        //    {text: 'close alert button text', onPress: () => console.log('alert closed')}
        //])
    }

    if (fontsLoaded) {
        return (
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                <View style={styles.container}>
                    <Header />
                    {/* header(serch bar and hamburger menu) */}
                    <View style={styles.pageContent}>
                        <View style={styles.list}>
                            <FlatList
                                numColumns={2}
                                keyExtractor={(item) => item.id}
                                data={todos}
                                renderItem={({ item }) => (
                                    <TodoListItem item={item} pressHandler={todoListItemPressHandler} />
                                )}
                            />
                            {/* <Text>list</Text> */}
                        </View>
                        {/* <Text>pageContent</Text> */}
                        {/* <View style={styles.buttonContainer}>
                    <Button title='add todo' />
                </View> */}
                        <AddTodoForm submitHandler={addTodoFormSubmitHandler} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    } else {
        return (
            <AppLoading
                startAsync={getFonts}
                onFinish={() => setFontsLoaded(true)}
                onError={()=> console.log('error with getting fonts')}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202125',
        //backgroundColor: '#363636',
        /* paddingTop: 80, */
        //paddingHorizontal: 20,
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    pageContent: {
        alignItems: 'center',
    },
    list: {
        height: 650,
        /* alignItems: 'center',
        justifyContent: 'center' */
        //paddingTop: 10,
    },
    todoListItem: {
        width: 170,
        marginTop: 12,
        marginHorizontal: 6,
        padding: 15,
        backgroundColor: 'green',
        fontSize: 24
    },
    todoListItemTitle: {
        fontSize: 25
    },
    todoListItemContent: {
        fontSize: 20
    },
    buttonContainer: {
        paddingTop: 10,
        fontSize: 10,
        /* alignItems: 'flex-end' */
    }
    /* list: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    buttonContainer: {
        marginTop: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
    } */
});
