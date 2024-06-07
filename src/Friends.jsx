import { useEffect, useState } from "react"
import Friend from "./Friend";

export default function Friends(){
    const [friends,setFriends] = useState();
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))

    },[])
    return(
        <div style={{
            border:'2px solid green',
            margin :'15px',
            padding : '15px',
            borderRadius : '5px'
        }}>
            <h3>Name: {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}