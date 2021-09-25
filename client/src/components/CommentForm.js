import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

const CommentForm = ({post, addComment }) => {
    const [friendsName, setFriendsName] = useState('')
    const [text, setText] = useState('')

    // I would need to move this to the users page and pass down the add
    //comment function

    const handleSubmit = async (e) => {
        addComment({text, name: friendsName})
        setFriendsName("")
        setText("")
        
    }

    return (
        <Segment>
            <Form size="small"  onSubmit={handleSubmit}>
                
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
                <Button size="tiny" >Comment</Button>
            </Form>
        </Segment>
    )
}

export default CommentForm;