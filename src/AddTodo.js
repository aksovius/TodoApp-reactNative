import React, { useState } from "react";
import {View, StyleSheet, Button, TextInput, Alert } from 'react-native'


export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
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