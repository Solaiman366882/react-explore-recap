import { useState } from "react"

export default function Team(){
    const teamStyle = {
        border:'5px solid green',
        padding:'10px 15px',
        margin:'10px auto',
        background:"purple",
        borderRadius:'10px',
        color:'#fafafa'
    }
    const[team,setTeam] = useState(11);

    const handleTeamAdd = () => {
        const newTeam = team +1;
        setTeam(newTeam)
    }
    const handleTeamRemove = () => {
        const newTeam = team -1;
        setTeam(newTeam)
    }

    return(
        <div style={teamStyle}>
            <h2>Player:{team}</h2>
            <div>
                <button onClick={handleTeamAdd}>Add</button>
                <button onClick={handleTeamRemove}>Remove</button>
            </div>
        </div>
    )
}