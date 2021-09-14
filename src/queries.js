import { gql } from '@apollo/client'

//not using this fragment
export const AUTHOR_INFO = gql`
  fragment AuthorInfo on Author {
    name
    born
    bookCount
    id
  }
`
export const ALL_EVENTS = gql`
  query {
    allEvents {
      title
      host {
        username
      }
      id
    }
  }
`

export const ADD_EVENT = gql`
  mutation addEvent($title: String!) {
    addEvent(title: $title) {
      title
    }
  }
`

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      username
    }
  }
`

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      value
    }
  }
`
export const USER_INFO = gql`
  query {
    me {
      username
      id
    }
  }
`
