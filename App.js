import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { Navbar } from './src/Navbar'
import { AppRegistry } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { TodoList } from './src/components/TodoList';


// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache()
});
export default function App() {
  
  const [todos, setTodos] = useState([])
  
  const addTodo = title => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title: title
    // }
    // setTodos((prevTodos) => {
    //   return [
    //     ...prevTodos,
    //     newTodo
    //   ]
    // })
    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title
    }])
  } 

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  console.log('aaa')
  return (
    <ApolloProvider client={client}>
    <View >
      <Navbar />
      <View style={styles.container}>
         <AddTodo onSubmit={addTodo}/>

         <TodoList/>
      </View>
    </View>
    </ApolloProvider>
  );
}
AppRegistry.registerComponent('MyApplication', () => App);
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
});
