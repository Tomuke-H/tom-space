import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react';
import { AuthContext } from '../providers/AuthProvider';
import Friend from './Friend';
import SemanticLoader from './SemanticLoader';

const Friends = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
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
            let allUsers = res.data.filter(u => u.id !== user.id)

            if(user.friends.length > 0){
                let userFriendsIds = user.friends
                let friends = allUsers.filter(u => userFriendsIds.indexOf(u.id) !== -1)
                setUsers(friends)
            } else {
                setUsers([])
            } 
        }catch (err) {
            alert(err)
        } finally {
            setLoading(false)
        }
    }

    const renderFriends = () => {
        if(users.length === 0){
            return (<h1>Yall have no friends!</h1>)
        }
        return users.map(f => {
            return (
                <Friend key={f.id} friendRemoved={friendRemoved} friend={f}/>
            )
        })
    }  

    return (
        <div>
            <h2>Friends</h2>
            <Card.Group>
                {loading ? <SemanticLoader /> : renderFriends()}
            </Card.Group>
        </div>
    )
}

export default Friends;