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
      attendees {
        username
        pic
        id
      }
      host {
        username
        pic
        id
      }
      id
    }
  }
`
export const ALL_USERS = gql`
  query {
    allUsers {
      username
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
export const EDIT_EVENT = gql`
  mutation editEvent(
    $title: String!
    $eventType: String
    $eventPic: String
    $location: String
    $eventId: ID!
  ) {
    editEvent(
      title: $title
      eventType: $eventType
      eventPic: $eventPic
      location: $location
      eventId: $eventId
    ) {
      title
      eventType
      eventPic
      location
      id
    }
  }
`
export const JOIN_EVENT = gql`
  mutation joinEvent($userId: ID!, $eventId: ID!) {
    joinEvent(userId: $userId, eventId: $eventId) {
      title
      attendees {
        username
        id
      }
      id
    }
  }
`
export const LEAVE_EVENT = gql`
  mutation leaveEvent($userId: ID!, $eventId: ID!) {
    leaveEvent(userId: $userId, eventId: $eventId) {
      title
      attendees {
        username
        id
      }
      id
    }
  }
`
export const FIND_EVENT = gql`
  query findEvent($eventId: ID!) {
    findEvent(eventId: $eventId) {
      title
      eventType
      eventPic
      location
      attendees {
        username
        id
      }
      host {
        username
        pic
        id
      }
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
      myEvents {
        title
        eventType
        eventPic
        location
        id
      }
    }
  }
`
export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`
