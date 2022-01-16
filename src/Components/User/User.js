import React from 'react';
import css from './User.module.css'


const User = ({user}) => {
    const {id, name} = user;
    return (
        <div className={css.wrap}>
            <div>{id}) {name}</div>
            <button>Details</button>
        </div>
    );
};

export default User;