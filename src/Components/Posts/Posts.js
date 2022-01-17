import React from 'react';
import Post from "../Post/Post";
import post from "../Post/Post";

const Posts = ({posts}) => {
    return (
        <div>
            {posts.map(posts => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;