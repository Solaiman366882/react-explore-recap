export default function Friend({friend}) {
    const {id,name,username,email,address} = friend;
    {
        console.log(id,name,username,email);
    }
    return(
        <div className="box">
            <h4>Id : {id}</h4>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>User Name:{username}</p>
        </div>
    )
    
}