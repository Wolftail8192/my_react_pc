import React, {useState} from 'react';
import Users from './Components/Users/Users';
import UserDetails from './Components/UserDetails/UserDetails';
import css from './App.module.css';
import Posts from "./Components/Posts/Posts";


const App = () => {

    const [user,setUser] = useState(null);

    const getUser = (user) => {

    }
    return (
        <div>
          <div className={css.wrap}>
              <Users getUser={{getUser}}/>
              <UserDetails/>
          </div>
              <Posts/>
        </div>
    );
};


export default App;