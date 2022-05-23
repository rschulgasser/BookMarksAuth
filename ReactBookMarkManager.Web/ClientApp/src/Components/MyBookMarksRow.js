import React from 'react';




const MyBookMarksRow = ({BookMark, onDeleteClick, onEditClick,isEdit, onCancelClick, title, onTextChange, onUpdateClick}) => {
    const {url, id} = BookMark;
    console.log(isEdit,id);
 
    return (
        
        <tr>
            <td>
                {isEdit!==id && BookMark.title}
                {isEdit===id&& <input value={title} type="text" onChange={(e)=>onTextChange(e)}/>}
            </td>
            <td><a target="_blank" href={url}>{url}</a></td>
        <td>
        {isEdit!==id &&<button className="btn btn-success" onClick={()=>onEditClick(BookMark)}>Edit Title</button>}
        {isEdit===id&&<>
             <button className="btn btn-warning" onClick={()=>onUpdateClick(BookMark)}>Update</button>
             <button className="btn btn-info" onClick={onCancelClick}>Cancel</button>
             </>}

             <button className="btn btn-danger" onClick={()=>onDeleteClick(BookMark)}>Delete</button>
        </td>
        <input type="hidden" value={id}/>
    </tr>
         
    )
    
}

export default MyBookMarksRow;