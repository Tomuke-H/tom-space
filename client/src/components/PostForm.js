import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

const PostForm = (props) => {
    console.log(props)
    const [title, setTitle] = useState(props.title ? props.title : "")
    const [text, setText] = useState(props.text ? props.text : "")

    const handleSubmit = (e) => {
        if (props.post) {
           props.updatePost({ id: props.post.id, title, text });
        } else {
            console.log(title, text)
            props.addPost({title, text});
        }
          { if (props.post) return props.setEditForm(false) }
          setTitle("");
          setText("");
      };


    return (
        <Segment>
            <h1>{ props.post ? "Edit Post" : "Post" }</h1>
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
                <Button color='blue'>{props.post? "Update" : "Post"}</Button>
            </Form>
        </Segment>
    )
}

export default PostForm;