import React from 'react'
import PostList from './PostList'

export default function BulletinBoard() {

  return (
    <div className="bulletinboard">
      <h1>BulletinBoard</h1>
      <div className="react-post">
        <PostList />
      </div>
    </div>
  )
}
