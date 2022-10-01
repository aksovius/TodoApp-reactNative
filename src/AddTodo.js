import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import {View, StyleSheet, Button, TextInput, Alert } from 'react-native'
import { ADD_TODO } from "./mutations/AddTodo";
import { GET_TODOS } from "./queries/TodoQueries";


export const AddTodo = () => {
    const [value, setValue] = useState('')
    const [addTodo] = useMutation( ADD_TODO, {
        variables: { title: value },
        update(cache, {data: {addTodo}}) {
            const {todos} = cache.readQuery({query: GET_TODOS })
            cache.writeQuery({
                query: GET_TODOS,
                data: { todos: [...todos, addTodo]}
            })
        }

    })

    const pressHandler = () => {
        if (value.trim()) {
            addTodo(value)
            setValue('')
        } else {
            Alert.alert('Null input')
        }
        
    }
    return (
        <View style={styles.block}>
            <TextInput  
                style = {styles.input}
                onChangeText={setValue}
                value={value}
                placeholder='Add todo..'/>
            <Button title='Add' onPress={pressHandler} />
        </View>
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