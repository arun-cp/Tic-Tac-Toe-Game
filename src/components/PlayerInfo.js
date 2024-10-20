import { useState } from "react";

export default function PlayerInfo (props){
const [edit, setEdit]= useState(false);
const [plName, setPlName]= useState(props.name);
let EditablePlayer = <h3>{plName}<br/> {props.symbol}</h3>;
function handleClick() {
    setEdit(!edit);
}
if (edit)
    EditablePlayer = <input type="text" defaultValue={plName} onChange={(e) => setPlName(e.target.value)}></input>;

    return(
        <>
            {EditablePlayer}
            <button onClick={handleClick}>{edit ? 'Save' : 'Edit'}</button>
        </>
    )
}