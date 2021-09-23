import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Card, Header } from 'semantic-ui-react'
import Post from '../components/Post'
import PostForm from '../components/PostForm'
import User from '../components/User'
import { AuthContext } from '../providers/AuthProvider'

const UserPage = () => {
    const [posts, setPosts] = useState("")
    const { user } = useContext(AuthContext)

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        try {
            let res = await axios.get("/api/posts")
            setPosts(res.data)
        } catch (error) {
            alert('error')
        }
    }

    const renderPosts = () => {
        if (posts.length == 0) {
            return <p>No Posts</p>
        }
        return posts.map((p) => 
            <Post post={p}/>
            )
    }

    
    return (
        <>
            <User user={user} />
            <PostForm />
            {renderPosts()}
        </>
    )
}

export default UserPage;