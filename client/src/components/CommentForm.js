import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

const CommentForm = () => {
    const [friendsName, setFriendsName] = useState('')
    const [text, setText] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await axios.post('/api/comments', {text, name: friendsName})
            console.log(res.data)
        }catch (err) {
            console.log(err)
        }
    }

    return (
        <Segment>
            <Form onSubmit={handleSubmit}>
                
                <Form.Input
                    value={text}
                    label="Comment"
                    onChange={(e) => setText(e.target.value)}
                    />
                <Form.Input
                    value={friendsName}
                    label="Name"
                    onChange={(e) => setFriendsName(e.target.value)}
                    />
                <Button size="small" color='blue'>Comment</Button>
            </Form>
        </Segment>
    )
}

export default CommentForm;