import axios from "axios";
import React, { useEffect, useState } from "react";

const FriendPage = (props) => {
    const [otherUser, setOtherUser] = useState({})

    useEffect(()=>{
        getUser();
    },[])
 // didn't finish this
    const getUser = async () => {
        try{
            console.log(props)
            // let res = await axios.get('/api/users/${props.match.params.id}')

        }catch (err){

        }
    }

    return (
        <div>
            <h1>This is your friend's page!</h1>
        </div>
    )
}

export default FriendPage;