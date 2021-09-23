import axios from 'axios';
import React, { useEffect, useState } from 'react';
import User from './User';

const Friends = () => {
    const [friends, setFriends] = useState([])

    useEffect(()=>{
        getFriends();
    },[])

    const getFriends = async () => {
        try {
            let res = await axios.get('/api/friends')
            setFriends(res.data)
        }catch (err) {
            alert(err)
        }
    }

    const renderFriends = () => {
        if(friends.length === 0){
            return (<h1>Yall have no friends!</h1>)
        }
        return friends.map(f => {
            return (
                <div key={f.id}>
                    <User user={f}/>
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