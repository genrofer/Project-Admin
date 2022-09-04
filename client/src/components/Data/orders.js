import { gql } from '@apollo/client'

const ORDERS = gql`
  query {
    users {
          id
          name
          surname
          age
          email
          phone
    }
  }
`

// Adding items

const ADD_USER = gql`
  mutation newUser($name: String! $surname: String! $age: Int! $email: String! $phone: String!){
    newUser(name: $name surname: $surname age: $age email: $email phone: $phone){
      id
      name
    }
  }
`

const DELETE_USER = gql`
  mutation deleteUser($id: ID!){
    deleteUser(id: $id){
      id
      name
    }
  }
`

const EDIT_USER = gql`
  mutation editUser($name: String! $surname: String! $age: Int! $email: String! $phone: String! $id: ID!){
    editUser(name: $name surname: $surname age: $age email: $email phone: $phone id: $id){
      id
      name
      surname
      age
      email
      phone
    }
  }
`


export {
  ORDERS,
  ADD_USER,
  DELETE_USER,
  EDIT_USER
}