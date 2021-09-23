import React, { useContext } from 'react'
import PostForm from '../components/PostForm'
import User from '../components/User'
import { AuthContext } from '../providers/AuthProvider'

const UserPage = () => {
    const {user} = useContext(AuthContext)
    
    return (
        <>
            <User user={user}/>
            <PostForm />
        </>
    )
}

export default UserPage;