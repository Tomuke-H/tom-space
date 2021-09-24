import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import OtherUser from '../components/OtherUser';
import { AuthContext } from '../providers/AuthProvider';


const FindFriends = () => {
    const [users, setUsers] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(()=>{
        getUsers();
    },[])

    const friendAdded = (id) => {
      let filteredUsers = users.filter(u => u.id !== id)
      setUsers(filteredUsers)
    }

    const getUsers = async () => {
        try {
            let res = await axios.get('/api/users')
            let allUsers = res.data
            let filterSelf = allUsers.filter(u => u.id !== user.id)
            if(user.friends.length > 0){
              let userFriendsIds = user.friends
              let nonFriends = filterSelf.filter(u => userFriendsIds.indexOf(u.id) === -1)
              setUsers(nonFriends)
            } else {
              setUsers(filterSelf)
            }
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
                    <OtherUser friendAdded={friendAdded} user={f}/>
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

export default FindFriends;