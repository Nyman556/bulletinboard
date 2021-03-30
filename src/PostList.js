  
import React, {useState, useEffect} from 'react'
import Post from './Post'

export default function PostList() {
const [posts, setPosts] = useState(null);

useEffect(() => {
    fetch('http://localhost:8000/posts')
    .then(res => {
    return res.json();
    })
    .then(data => {
        setPosts(data);
    })
}, []);

const likePost = (post) => {
setPosts({...posts, [post.id]: post});
}
return (
    <div>
    {posts && posts.map((post) => (
    <Post key={post.id} post={post} likePost={likePost} />
))}
</div>
)
}
