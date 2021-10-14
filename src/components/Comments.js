import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_COMMENT, FIND_EVENT } from '../queries'

const Comments = ({ setNotify, event }) => {
  const [comment, setComment] = useState('')

  const [createComment] = useMutation(CREATE_COMMENT, {
    // onCompleted: ({ createComment }) => {
    //   refetch()
    // },
    update: (store, response) => {
      //not working.  needs to update after each comment is added
      const dataInStore = store.readQuery({
        query: FIND_EVENT,
        variables: { eventId: event.id },
      })
      store.writeQuery({
        query: FIND_EVENT,
        variables: { eventId: event.id },
        data: {
          ...dataInStore,
          findEvent: {
            ...dataInStore.findEvent,
            comments: [
              ...dataInStore.findEvent.comments,
              response.data.createComment,
            ],
          },
        },
      })
    },
  })

  const handleEvent = () => {
    createComment({ variables: { comment, eventId: event.id } })
    setComment('')
  }
  const comments = event.comments

  return (
    <div>
      <div>
        <input
          value={comment}
          placeholder="comments"
          onChange={({ target }) => setComment(target.value)}
        ></input>
        <button onClick={handleEvent}>Comment</button>
      </div>
      {comments.length && (
        <ul>
          {comments.map((c) => (
            <li key={c.id}>
              <div>
                <img
                  style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                  src={c.author.pic}
                />
                {c.comment}{' '}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Comments
