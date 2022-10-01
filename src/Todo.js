import { useMutation } from "@apollo/client";
import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import { DELETE_TODO } from "./mutations/AddTodo";
import { GET_TODOS } from "./queries/TodoQueries";

export const Todo = ({todo}) => {
    const [deleteTodo] = useMutation(DELETE_TODO, {
        variables: {id: todo.id},
        update(cache, {data: {deleteTodo}}) {
            const {todos} = cache.readQuery({query: GET_TODOS })
            cache.writeQuery({
                query: GET_TODOS,
                data: {todos: todos.filter(t => t.id !== deleteTodo.id)}
            })
        }
    })
    return (
        <TouchableOpacity 
            activeOpacity={0.5}
            onPress={() => console.log('presed', todo.id)}
            onLongPress={deleteTodo.bind(null, todo.id)}  // bind new function
        >
            <View style={styles.todo}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom:10
    }
})