import {gql} from '@apollo/client'

export const ADD_TODO = gql`
    mutation addTodos($title: String!) {
        addTodo(title: $title) {
            id
            title
        }
    }
`
export const DELETE_TODO = gql`
    mutation deleteTodos($id: ID!) {
        deleteTodo(id: $id) {
            id
            title
        }
    }
    `       