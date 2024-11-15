import { useRef, useState } from "react";

export default function PlayerInfo (props){
const ipplName = useRef();
const [edit, setEdit]= useState(false);
const [plName, setPlName]= useState(props.name);
let EditablePlayer = <h3>{plName}<br/> {props.symbol}</h3>;
function handleClick() {
    setEdit(!edit);
    ipplName.current ? setPlName(ipplName.current.value) : setPlName(plName);
}
if (edit)
    EditablePlayer = <><br/><br/><input type="text" defaultValue={plName} ref={ipplName}/> <br/><br/></>;

    return(
        <>
            {EditablePlayer}
            <button onClick={handleClick}>{edit ? 'Save' : 'Edit'}</button>
        </>
    )
}