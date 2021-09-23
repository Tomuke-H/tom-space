import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

const PostForm = () => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await axios.post('/api/posts', {title, text})
            console.log(res.data)
        }catch (err) {
            console.log(err)
        }
    }

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