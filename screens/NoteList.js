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

    const upsertTodo = (todo) => {
        setTodos((previosTodos) => {
            const index = previosTodos.findIndex(x => x.id == todo.id)
            if (index === -1) {
                return [
                    todo,
                    ...previosTodos
                ]
            } else {
                previosTodos[index].title = todo.title
                previosTodos[index].content = todo.content
                return [...previosTodos]
            }
        })
    }

    const todoListItemPressHandler = (item) => {
        navigation.navigate('EditNote', { item: item, upsertTodo: upsertTodo, isNew: false, todos: todos })
        //navigation.push('EditNote')
    }

    const addTodoPressHandler = () => {
        const emptyItem = { id: '', title: '', content: '' }
        navigation.navigate('EditNote', { item: emptyItem, upsertTodo: upsertTodo, isNew: true, todos: todos })
    }

    

    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <FlatList
                        numColumns={2}
                        keyExtractor={(item) => item.id}
                        data={todos}
                        extraData={todos}
                        renderItem={({ item }) => (
                            <TodoListItem item={item} pressHandler={todoListItemPressHandler} />
                        )}
                    />
                    <View>
                        <Button onPress={addTodoPressHandler} title='add todo' color='#047013' />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#202125',
    }
});


//const unsubscribe = navigation.addListener('focus', () => {
    //    console.log('focus')
    //});
    //const unsubscribe2 = navigation.addListener('willFocus', () => {
    //    console.log('willFocus')
    //});
    ///* const unsubscribe3 = navigation.addListener('onWillFocus', () => {
    //    console.log('onWillFocus')
    //}); */
    //const unsubscribe4 = navigation.addListener('didFocus', () => {
    //    console.log('didFocus')
    //});
    //const unsubscribe5 = navigation.addListener('willBlur', () => {
    //    console.log('willBlur')
    //});
    //const unsubscribe6 = navigation.addListener('didBlur', () => {
    //    console.log('didBlur')
    //});




    //componentDidMount() {
    //    console.log('didmount')
    //    /* this.props.fetchData();
    //    this.willFocusSubscription = this.props.navigation.addListener(
    //        'willFocus',
    //        () => {
    //            this.props.fetchData();
    //        }
    //    ); */
    //}

    //componentWillUnmount() {
    //    console.log('willunmount')
    //    //this.willFocusSubscription.remove();
    //}
