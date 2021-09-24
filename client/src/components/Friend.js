import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router';
import { Button, Card } from 'semantic-ui-react';

const Friend = ({friend, friendRemoved}) => {
    const history = useHistory();
    const removeFriend = async (id) => {
        try {
            let res = await axios.put(`/api/remove_friend/${id}`)
            console.log(res.data)
            friendRemoved(id)
        }catch(err){
            alert(err)
        }
    }

    return (
        <Card>
            <Card.Content>
                <Card.Header>{friend.name}</Card.Header>
                <Card.Meta>{friend.email}</Card.Meta>
            </Card.Content>
            <Card.Content>
                <Button onClick={()=> removeFriend(friend.id)}>Remove friend</Button>
                <Button onClick={()=> history.push(`/friend_page/${friend.id}`)}>View Profile</Button>
            </Card.Content>
        </Card>
    )
}

export default Friend;