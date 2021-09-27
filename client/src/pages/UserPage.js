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

    const updatePost = async (post) => {
        try {
            let res= await axios.put(`/api/posts/${post.id}`, post)
            let newPosts = posts.map((p) => (p.id === post.id ? post : p))
            setPosts(newPosts)
        } catch (error) {
            
        }
    }

    const deletePost = async (id) => {
        try {
          await axios.delete(`/api/posts/${id}`)
          setPosts(posts.filter((p) => p.id !== id))
          
        } catch (error) {
          
        }
        
    }

    const like = async (id) => {
        console.log(id);
        try {
          let res = await axios.put(`/api/posts/${id}/like`);
          let newPosts = posts.map((p) => (p.id === id ? res.data : p));
          setPosts(newPosts);
        } catch (err) {}
      };


      const addPost = async (post) => {
        try {
            let res = await axios.post('/api/posts', post)
            setPosts([res.data, ...posts])
        }catch (err) {
            alert(err)
        }
    }

    const renderPosts = () => {
        if (posts.length == 0) {
            return <p>No Posts</p>
        }
        return posts.map((p) => 
            <Post key={p.id} 
            like={like} 
            post={p} 
            deletePost={deletePost} 
            updatePost={updatePost}
            addPost={addPost}
            posts={posts}/>
            )
    }

    return (
        <>
            <User user={user} />
            <Friends />
            <PostForm 
                updatePost={updatePost}
                addPost={addPost}
                posts={posts}/>
            {renderPosts()}
        </>
    )
}

export default UserPage;