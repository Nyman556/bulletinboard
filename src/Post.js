import React, {useState} from 'react'
import PostLike from './PostLike'

export default function Post({post, likePost}) {
  const [isLiked, setIsLiked] = useState(post.isLiked)

    const handleClick = (e) => {
      post.isLiked = !post.isLiked;
      const url="http://localhost:8000/posts";
         const postid = e.target.id;
         const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(post)
      };
      fetch(url + '/' + postid, requestOptions)
          .then(response => response.json())
          .then(data => setIsLiked(data.isLiked));
  }
  
  return (
    <div className="post" key={post.id}>
        <h2>{ post.question }</h2>
        <div>
            <ol>
            <li>{post.answer1}</li>
            <li>{post.answer2}</li>
            <li>{post.answer3}</li>
            {isLiked ? <PostLike /> : null}
            </ol>
        </div>
        <button onClick={handleClick} className="btn" id={post.id}>
            <i className={ 'far' + ` fa-heart ${!isLiked ? 'fas' + ` fa-heart` : null}`} id={post.id}></i>
        </button>
    </div>
  )
}