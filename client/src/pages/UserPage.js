import React, { useContext } from 'react'
import User from '../components/User'
import { AuthContext } from '../providers/AuthProvider'

const UserPage = () => {
    const {user} = useContext(AuthContext)
    
    return (
        <User user={user}/>
    )
}

export default UserPage;