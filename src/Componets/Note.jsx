

import React from 'react'

const Note = ({id,text,editHandler,deleteHandler}) => {

    // const deleteNote=(id)=>{
    //   const newNote=notes.filter((note)=> note.id!=id)
        
    // }

  return (
    <div className='note'>
        <div className='note-body'>{text}</div>
        <div className="note_footer" style={{justifyContent:"flex-end"}}>
        <button className='note_save'onClick={()=>(deleteHandler(id))} >Delete</button>
        <button className='note_save' onClick={()=>(editHandler(id,text))} >Edit</button>
        </div>
      
    </div>
  )
}

export default Note
