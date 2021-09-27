import axios from 'axios';
import React, { useState } from 'react';
import { Button, Card, Divider, Icon, Segment } from 'semantic-ui-react';
import CommentForm from './CommentForm';
import { FloatRightIcon } from './Post';
import PostForm from './PostForm';

function Comment ({comment , deleteComment }) {
  // const [commentForm, setCommentForm] = useState(false)
  // const [editForm, setEditForm] = useState(false)

  return (
    <>
    <Card>
    <Card.Content>
        <p>{comment.text}</p>
          <Icon name="circle" />{comment.name}
          <FloatRightIcon 
            link 
            name="trash alternate outline" 
            onClick={() => {deleteComment(comment.id)}} />
    </Card.Content>
    </Card>
    </>
  );
}

export default Comment;