import { useQuery } from "@apollo/client";
import React from "react";
import { GET_TODOS } from "../queries/TodoQueries";
import { Todo } from '../Todo';
import {Text, View, StyleSheet, FlatList} from 'react-native'
    
export const TodoList = () => {
    const { data, loading } = useQuery(GET_TODOS)


    const removeTodo = id => {}
    if (loading)  console.log(loading)
   
    return (
        <View style={styles.block}>
        <FlatList
        keyExtractor={item => item.id}
        data={data?.todos}
        renderItem={({item}) => <Todo todo={item} onRemove={removeTodo} />}
      /></View>
    )
    
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginBottom: 15
    },
    input: {
        width: '80%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    }
})

