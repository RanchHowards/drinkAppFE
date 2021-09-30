import { InMemoryCache, makeVar } from '@apollo/client'

export const cache = new InMemoryCache({
  typePolicies: {
    Event: {
      fields: {
        attendees: {
          merge: false,
        },
      },
    },
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return isLoggedInVar()
          },
        },
      },
    },
  },
})

export const isLoggedInVar = makeVar(!!localStorage.getItem('user-token'))
