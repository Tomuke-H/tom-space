import axios from 'axios';
import React from 'react';
import { Button, Card } from 'semantic-ui-react';

const User = ({user}) => {
    const addFriend = async (id) => {
        try {
            let res = await axios.put(`/api/add_friend/${id}`)
        }catch(err){
            alert(err)
        }
    }
    return (
        <Card>
            <Card.Content>
                <Card.Header>{user.name}</Card.Header>
                <Card.Meta>{user.email}</Card.Meta>
            </Card.Content>
        </Card>
    )
}

export default User;