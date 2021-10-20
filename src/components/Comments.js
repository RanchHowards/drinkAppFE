import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_COMMENT, FIND_EVENT } from '../queries'

const Comments = ({ setNotify, event, going }) => {
  const [comment, setComment] = useState('')

  const [createComment] = useMutation(CREATE_COMMENT, {
    update: (store, response) => {
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
    if (comment.length > 0) {
      createComment({ variables: { comment, eventId: event.id } })
      setComment('')
    }
  }

  const comments = event.comments

  return (
    <div>
      {going && (
        <div className="comment-form">
          <input
            value={comment}
            placeholder="comments"
            onChange={({ target }) => setComment(target.value)}
          ></input>
          <button onClick={() => handleEvent()}>+</button>
        </div>
      )}
      {comments.length > 0 && (
        <ul>
          {comments.map((c) => (
            <li key={c.id} className="comment" id={c.id}>
              <img
                className="comment-pic"
                alt="comment-pic"
                src={c.author.pic}
              />
              <p>{c.comment}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Comments
