import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

const PostForm = (props) => {
    console.log(props)
    const [title, setTitle] = useState(props.title ? props.title : "")
    const [text, setText] = useState(props.text ? props.text : "")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.post) {
           props.updatePost({ id: props.post.id, title, text });
        } else {
            console.log(title, text)
            props.addPost({ title, text });
        }
          setTitle("");
          setText("");
      };

      //Make the form disappear when you post

    return (
        <Segment>
            <h1>{ props.post ? "Edit Post" : "Post" }</h1>
            <Form onSubmit={handleSubmit}>
                
                <Form.Input
                    placeholder= {title}
                    value={title}
                    label="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    />
                <Form.Input
                    placeholder= "hi"
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