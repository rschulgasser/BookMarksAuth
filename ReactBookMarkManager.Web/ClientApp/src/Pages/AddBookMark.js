import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const AddBookMark = () => {
   
    const [title, setTitle]=useState('');
    const [url,setUrl]=useState('');
    const history = useHistory();

    const onSubmit=async e=>{
        console.log('hi');
        e.preventDefault();
         await axios.post('/api/bookmarks/addbookmark',{title, url});
         history.push('/mybookmarks');
    }
  
    return (
        <div>
           <div className="row">
               <div className="col-md-6 offset-md-3 card card-body bg-light">
                   <h3>Add Bookmark</h3>
                <form onSubmit={onSubmit}>
                    <input type="text" name="title" placeholder="Title" class="form-control" value={title} onChange={e=>setTitle(e.target.value)}/>
                    <br/>
                    <input type="text" name="url" placeholder="Url" class="form-control" value={url} onChange={e=>setUrl(e.target.value)}/>
                    <br/>
                    <button className="btn btn-primary">Add</button>
                </form>
                </div>
            </div>
        </div>
      
    );
}
export default AddBookMark;