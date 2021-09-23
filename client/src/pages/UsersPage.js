import axios from 'axios';
import React, { useEffect, useState } from 'react';
import User from '../components/User';

const UsersPage = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        getUsers();
    },[])

    const getUsers = async () => {
        try {
            let res = await axios.get('/api/users')
            setUsers(res.data)
        }catch (err) {
            alert(err)
        }
    }

    const renderUsers = () => {
        if(users.length === 0){
            return (<h1>No users!</h1>)
        }
        return users.map(f => {
            return (
                <div key={f.id}>
                    <User user={f}/>
                </div>
            )
        })
    }  

    return (
        <div>
            <h2>All users</h2>
            {renderUsers()}
        </div>
    )
}

export default UsersPage;