import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { Navbar } from './src/Navbar'
import { AppRegistry } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { TodoList } from './src/components/TodoList';
import  PhotoUploader  from './src/components/PhotoUploader';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { screenOptions } from './src/styles'

const Stack = createStackNavigator()

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache()
});
export default function App() {

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        {/* <Navbar /> */}
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen
            name="Home"
            component={TodoList}
            options={{ title: 'React Native' }}
          />
          <Stack.Screen
            name="Photo Uploader"
            component={PhotoUploader}
            options={({
              route: {
                params: {
                  chapter: { number, title },
                },
              },
            }) => ({
              title: number ? `Chapter ${number}: ${title}` : title,
              gestureResponseDistance: { horizontal: 500 },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
AppRegistry.registerComponent('MyApplication', () => App);

