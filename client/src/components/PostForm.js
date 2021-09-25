import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import CommentForm from './CommentForm'

const PostForm = (props) => {
    const [title, setTitle] = useState(props.title ? props.title : "")
    const [text, setText] = useState(props.text ? props.text : "")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.id) {
          props.updatePost({ id: props.id, title, text });
        } else {
          props.addPost({ text, title });
        }
          setTitle("");
          setText("");
        
      };


    return (
        <Segment>
            <Form onSubmit={handleSubmit}>
                
                <Form.Input
                    value={title}
                    label="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    />
                <Form.Input
                    value={text}
                    label="Text"
                    onChange={(e) => setText(e.target.value)}
                    />
                <Button color='blue'>Post</Button>
            </Form>
        </Segment>
    )
}

export default PostForm;