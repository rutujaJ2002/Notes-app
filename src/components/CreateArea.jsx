import React, {useState} from "react";
import Fab from '@material-ui/core/fab';
import AddIcon from '@material-ui/icons/Add';
import '../index.css';

const CreateArea = (props) =>{
    const [note , setNote]= useState({
        title:"",
        content:""
    })

    const [isExpanded, setExpanded] =useState(false);

    const handleChange= (event)=>{
        const {name, value} = event.target;

        setNote(prevNote =>{
            return {
                ...prevNote,
                [name]:value
            }
        })
    }

    const submitNote =(event)=>{
        props.onAdd(note);

        setNote({
            title:"",
            content:""
        });
        event.preventDefault();
    }

    const expand=()=>{
        setExpanded(true);
    }

    return(
        <div >
            <form className="create-note">
                {isExpanded && (
                <input
                    type="text"
                    placeholder="Title"
                    className="input"
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    required
                />
                )}


                <textarea
                    name="content"
                    rows={isExpanded ? 3:1}
                    onClick={expand}
                    cols="30"
                    placeholder="Type your note here.."
                    onChange={handleChange}
                    value={note.content}
                    required
                ></textarea>

                <button type="submit">
                    <Fab onClick={submitNote} className="button">
                        <AddIcon/>
                    </Fab>
                </button>
            </form>
        </div>
    )
}

export default CreateArea;