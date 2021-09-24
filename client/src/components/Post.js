import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Divider, Icon, Segment } from 'semantic-ui-react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import PostForm from './PostForm';

function Post ({post, deletePost, editPost}) {
  const [commentForm, setCommentForm] = useState(false)
  const [editForm, setEditForm] = useState(false)
  const [comments, setComments] = useState("")


  useEffect(()=> {
    getComments()
  },[])

  const getComments = async () => {
    try {
      console.log(post.id)
        let res = await axios.get(`/api/posts/${post.id}/comments`)
        setComments(res.data)
    } catch (error) {
        alert(error)
        console.log(error)
    }
}

  const renderComments = () => {
    if (comments.length == 0) {
        return <p>No Comments</p>
    } else 
      return comments.map((c) => 
      <Comment 
      key={c.id} 
      comment={c} 
      />
      )
    }
    //PASS DOWN POST INTO COMMENT FORM

  return (
    <Card>
    <Card.Content>
    <Icon link name="edit" onClick={()=> setEditForm(!editForm)}/>
    {editForm && <PostForm />}
    <Icon link name="trash" onClick={() => {deletePost(post.id)}} />
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
      <Button size="tiny" onClick={()=> setCommentForm(!commentForm)}>Comments</Button>
      {commentForm && renderComments()}
      {commentForm && <CommentForm post={post} />}
      </Segment>
    </Card.Content>
    </Card>
  );
}

export default Post;