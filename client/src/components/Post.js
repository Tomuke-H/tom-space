import axios from 'axios';
import React, { useState } from 'react';
import { Button, Card, Divider, Icon, Segment } from 'semantic-ui-react';
import CommentForm from './CommentForm';
import PostForm from './PostForm';

function Post ({post, deletePost, editPost}) {
  const [commentForm, setCommentForm] = useState(false)
  const [editForm, setEditForm] = useState(false)

  return (
    <Card>
    <Card.Content>
    <Icon name="edit" onClick={()=> setEditForm(!editForm)}/>
    {editForm && <PostForm />}
    <Icon name="trash" onClick={() => {deletePost(post.id)}} />
      <Divider horizontal>
        <p>{post.title}</p>
        <Icon name="angle down" />
        </Divider> 
        <Segment>
          {post.text}
        </Segment>
      <Divider />
      <Segment basic>
      <Card.Meta textAlign="right">Likes: {post.likes}</Card.Meta>            
      <Card.Meta textAlign="left">
      <Button size="tiny" onClick={()=> setCommentForm(!commentForm)}>Comment</Button>
      {commentForm && <CommentForm />}
      </Card.Meta>
      </Segment>
      
    </Card.Content>
    </Card>
  );
}

export default Post;