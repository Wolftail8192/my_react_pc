import React, {useState} from 'react';
import Users from './Components/Users/Users';
import UserDetails from './Components/UserDetails/UserDetails';
import css from './App.module.css';
import Posts from "./Components/Posts/Posts";
import {postService} from "./services/post.service";


const App = () => {

    const [user,setUser] = useState(null);


    const [userId, setUserId] = useState(null)

    const [posts, setPosts] = useState([])

    const getUser = (user) => {

        setUser(user)
    }
    
    const getUserId = (id) => {

        postService.getByUserId(id).then(value => setPosts([...value]))
    }
    return (
        <div>
          <div className={css.wrap}>
              <div > < Users getUser={getUser}/> </div>
              <div > {user && <UserDetails user={user} getUserId={getUserId}/>} </div>
          </div>
            {!!posts.length && <Posts posts={posts}/>}
        </div>
    );
};


export default App;