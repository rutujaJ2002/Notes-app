import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

const Note= (props)=>{

    const deleteNote=()=>{
        props.onDelete(props.id);
    }

    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <DeleteIcon onClick={deleteNote} className="dlt-btn"/>
        </div>
    )
}

export default Note;