import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Card, Header } from 'semantic-ui-react'
import Friends from '../components/Friends'
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

    const editPost = async (id) => {
        try {
            let res= await axios.put(`/api/posts/${id}/edit`)
        } catch (error) {
            
        }
    }

    const deletePost = async (id) => {
        try {
          let res = await axios.delete(`/api/posts/${id}`)
          setPosts(posts.filter((p) => p.id !== id))
          
        } catch (error) {
          
        }
        
    }

    const renderPosts = () => {
        if (posts.length == 0) {
            return <p>No Posts</p>
        }
        return posts.map((p) => 
            <Post key={p.id} post={p} deletePost={deletePost} editPost={editPost}/>
            )
    }

    return (
        <>
            <User user={user} />
            <Friends />
            <PostForm />
            {renderPosts()}
        </>
    )
}

export default UserPage;