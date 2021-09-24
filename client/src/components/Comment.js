import axios from 'axios';
import React, { useState } from 'react';
import { Button, Card, Divider, Icon, Segment } from 'semantic-ui-react';
import CommentForm from './CommentForm';
import PostForm from './PostForm';

function Comment ({comment }) {
  // const [commentForm, setCommentForm] = useState(false)
  // const [editForm, setEditForm] = useState(false)

  return (
    <>
    <Card>
    <Card.Content>
        <p>{comment.text}</p>
          <Icon name="circle" />{comment.name}
    </Card.Content>
    </Card>
    </>
  );
}

export default Comment;