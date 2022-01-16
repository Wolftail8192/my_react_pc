import React from 'react';
import Users from './Components/Users/Users';
import UserDetails from './Components/UserDetails/UserDetails';
import css from './App.module.css';
import Posts from "./Components/Posts/Posts";


const App = () => {
    return (
        <div>
          <div className={css.wrap}>
              <Users/>
              <UserDetails/>
          </div>
              <Posts/>
        </div>
    );
};

export default App;