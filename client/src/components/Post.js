import React from 'react';
import { Button, Card, Divider, Icon, Segment } from 'semantic-ui-react';

function Post ({post}) {
  return (
    <Card>
    <Card.Content>
    <Icon name="edit" />
    <Icon name="trash" />
      <Divider horizontal>
        <p>{post.title}</p>
        <Icon name="angle down" />
        </Divider> 
        <Segment>
          {post.text}
        </Segment>
      <Divider />
      <Card.Meta textAlign="right">Likes: {post.likes}</Card.Meta>
      <Card.Meta textAlign="left">Comments</Card.Meta>
    </Card.Content>
    </Card>
  );
}

export default Post;