import React from 'react';
import { Card } from 'semantic-ui-react';

const User = ({user}) => {
    return (
        <Card>
            <Card.Content>
                <Card.Header>User</Card.Header>
                <Card.Meta>{user.email}</Card.Meta>
            </Card.Content>
        </Card>
    )
}

export default User;