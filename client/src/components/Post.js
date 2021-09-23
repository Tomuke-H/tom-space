import React from 'react';
import { Card, CardContent, CardMeta, Header } from 'semantic-ui-react';

function Post ({post}) {
  return (
    <Card key={post.id}>
    <Card.Content>
      <Card.Header>{post.title}</Card.Header>
      <Card.Meta>{post.text}</Card.Meta>
      <Card.Meta>{post.likes}</Card.Meta>
    </Card.Content>
    </Card>
  );
}

export default Post;