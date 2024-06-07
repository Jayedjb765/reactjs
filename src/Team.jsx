import { useState } from "react"

export default function Team(){
    const [team,setPlayerCount] = useState(11);
    const addplayer =()=>{
        const totalplayer  =  team+1;
        setPlayerCount(totalplayer);
    }
    const removePlayer =() =>{
        setPlayerCount(team-1);
    }

    const teamstyle ={
        border : '2px solid purpl',
        margin : '15px',
        padding :'15px',
        borderRadius : '15px'
    }

    
    return(
        <div style={teamstyle}>
            <h3>Player :{team}</h3>
            <button onClick={addplayer}>Add player</button>
            <button onClick={removePlayer}>Remove player</button>
        </div>
    )
}