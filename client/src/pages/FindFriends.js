import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react';
import OtherUser from '../components/OtherUser';
import SemanticLoader from '../components/SemanticLoader';
import { AuthContext } from '../providers/AuthProvider';


const FindFriends = () => {
    const [users, setUsers] = useState([])
    const {user} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getUsers();
    },[])

    const friendAdded = (id) => {
      let filteredUsers = users.filter(u => u.id !== id)
      setUsers(filteredUsers)
    }

    const getUsers = async () => {
        try {
          setLoading(true)
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
        }finally{
          setLoading(false)
        }
    }

    const renderUsers = () => {
        if(users.length === 0){
            return (<h2>You're friends with everyone!!</h2>)
        }
        return users.map(f => {
            return (
                    <OtherUser key={f.id} friendAdded={friendAdded} user={f}/>
            )
        })
    }  

    return (
        <div>
            <h2>All users</h2>
            <Card.Group>
              {loading ? <SemanticLoader /> : renderUsers()}
            </Card.Group>
        </div>
    )
}

export default FindFriends;