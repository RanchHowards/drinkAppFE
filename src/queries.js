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
      eventType
      eventPic
      location
      host {
        username
        pic
      }
      id
    }
  }
`

export const ADD_EVENT = gql`
  mutation addEvent(
    $title: String!
    $eventType: String
    $eventPic: String
    $location: String
  ) {
    addEvent(
      title: $title
      eventType: $eventType
      eventPic: $eventPic
      location: $location
    ) {
      title
      eventType
      eventPic
      location
    }
  }
`

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      value
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
      drink
      pic
    }
  }
`
export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`
