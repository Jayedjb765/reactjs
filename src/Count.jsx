import { useState } from "react"

export default function Count(){
    const [cunt,setCunt] = useState(0)
    const handelAdd = ()=>{
        const newCount = cunt + 1;
        setCunt(newCount);
    }
    const handelReduce=()=>{
        const handelDeduct =  cunt -1;
        setCunt(handelDeduct);
    }
    return(
        <div style={{border:'2px solid yellow'}}>
            <h3>Count:{cunt}</h3>
            <button onClick={handelAdd}>Add</button>
            <button onClick={handelReduce}>reduce</button>
            
             </div>
    )
}