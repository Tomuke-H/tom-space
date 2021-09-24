import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Friend from './Friend';

const Friends = () => {
    const [users, setUsers] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(()=>{
        getFriends();
    },[])

    const friendRemoved = (id) => {
        let filteredUsers = users.filter(u => u.id !== id)
        setUsers(filteredUsers)
      }
  
    const getFriends = async () => {
        try {
            let res = await axios.get('/api/users')
            let allUsers = res.data
            let filterSelf = allUsers.filter(u => u.id !== user.id)

            if(user.friends.length > 0){
            let userFriendsIds = user.friends
            let friends = filterSelf.filter(u => userFriendsIds.indexOf(u.id) !== -1)
                setUsers(friends)
            } else {
                setUsers([])
            }
        }catch (err) {
            alert(err)
        }
    }

    const renderFriends = () => {
        if(users.length === 0){
            return (<h1>Yall have no friends!</h1>)
        }
        return users.map(f => {
            return (
                <div key={f.id}>
                    <Friend friendRemoved={friendRemoved} friend={f}/>
                </div>
            )
        })
    }  

    return (
        <div>
            <h2>Friends</h2>
            {renderFriends()}
        </div>
    )
}

export default Friends;