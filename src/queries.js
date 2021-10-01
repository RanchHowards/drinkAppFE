import { gql } from '@apollo/client'

//fragment - not in use
export const USER_FIELDS = gql`
  fragment UserFields on User {
    username
    pic
    id
  }
`
//fragment - not working
export const EVENT_FIELDS = gql`
  fragment EventFields on Event {
    title
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
      description
      maxGuests
      eventDate
      createdAt
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
    $eventDate: Date
    $description: String
    $maxGuests: Int
  ) {
    addEvent(
      title: $title
      eventType: $eventType
      eventPic: $eventPic
      location: $location
      eventDate: $eventDate
      description: $description
      maxGuests: $maxGuests
    ) {
      title
      eventType
      eventPic
      location
      eventDate
      createdAt
      description
      maxGuests
    }
  }
`
export const EDIT_EVENT = gql`
  mutation editEvent(
    $title: String!
    $eventType: String
    $eventPic: String
    $location: String
    $eventDate: Date
    $description: String
    $maxGuests: Int
    $eventId: ID!
  ) {
    editEvent(
      title: $title
      eventType: $eventType
      eventPic: $eventPic
      location: $location
      eventDate: $eventDate
      description: $description
      maxGuests: $maxGuests
      eventId: $eventId
    ) {
      title
      eventType
      eventPic
      location
      description
      maxGuests
      eventDate
      createdAt
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
        pic
        id
      }
      host {
        username
        pic
        drink
        id
      }
      description
      maxGuests
      eventDate
      createdAt
      id
    }
  }
`
export const CREATE_USER = gql`
  mutation createUser(
    $username: String!
    $password: String!
    $drink: String
    $pic: String
  ) {
    createUser(
      username: $username
      password: $password
      drink: $drink
      pic: $pic
    ) {
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
        description
        maxGuests
        eventDate
        createdAt
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
