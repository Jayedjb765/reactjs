export default function Friend({friend}){
    const {name,email} = friend;
    return(
        <div style={{
            border:'2px solid green',
            margin :'15px',
            padding : '15px',
            borderRadius : '5px'
        }}>
            <h4>Name:{name} </h4>
            <p>Email:{email} </p>

        </div>
    )
}