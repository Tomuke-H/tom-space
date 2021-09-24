import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router';
import { Button, Card } from 'semantic-ui-react';

const OtherUser = ({user}) => {
    const history = useHistory();
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
            <Card.Content>
                <Button onClick={()=> addFriend(user.id)}>Add friend</Button>
                <Button onClick={()=> history.push(`/friend_page/${user.id}`)}>View Profile</Button>
            </Card.Content>
        </Card>
    )
}

export default OtherUser;