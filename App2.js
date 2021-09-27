import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('amit')
  const [todos, setTodos] = useState([
    { id: '1', title: 'This Is', content: 'here we go content' },
    { id: '2', title: 'koteret', content: 'goof ha tzova' },
    { id: '3', title: 'title', content: 'just a normal centnceS' },
    { id: '4', title: 'ooga booga', content: 'oh yhea' },
    { id: '5', title: 'no no no', content: 'yes yes yes!' },
  ])
  const changeNameHandler = () => {
    setName('Niggers?')
  }
  const handleTextChange = (value) => {
    setName(value)
  }

  const ListItemPressHandler = (item) => {
    setName(item.title)
  }

  /* handleListItemClick = (listItem) => {
    setName(listItem.title)
  }  */
  return (
    <ScrollView>
      <View style={styles.list}>
        <Text>oh yeah this is list</Text>
        <Text />
        <FlatList
          numColumns={2}
          keyExtractor={(item) => item.id}
          data={todos}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => ListItemPressHandler(item)}>
              <Text style={styles.listItem}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
        {/* {todos.map((todo) => {
          return (
            <View key={todo.key} style={styles.listItem}>
              <Text>title: {todo.title}</Text>
              <Text>content: {todo.content}</Text>
            </View>
          )
        })} */}
        <View style={styles.container}>
          <Text>my name is {name}</Text>
          <TextInput
            style={styles.input}
            placeholder='what is your name?'
            onChangeText={handleTextChange}
          />
          <View style={styles.buttonContainer}>
            <Button title='change name' onPress={changeNameHandler} />
          </View>
          <StatusBar style="auto" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //backgroundColor: '#363636',
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    marginTop: 24,
    marginHorizontal: 8,
    padding: 30,
    backgroundColor: 'green',
    fontSize: 24
  },
  list: {
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
  }
});
