import React,  { useEffect, useState }  from "react";
import axios from 'axios';
import MyBookMarksRow from "../Components/MyBookMarksRow";
import { useAuthContext } from "../AuthContext";
import { Link, useHistory } from 'react-router-dom';
const MyBookMarks = () => {
   const {user}=useAuthContext();
    const [bookMarks, setBookMarks]=useState([]);
    const history = useHistory();
    const [isEdit, setIsEdit]=useState(0);
    const [title,setTitle]=useState();
  const{firstName, lastName}=user;
  console.log(user);

  useEffect(() => {
    const getBookMarks = async () => {
        const { data } = await axios.get('/api/BookMarks/getbookmarks');
        data.map(m=>m.isEdit=false);
        setBookMarks(data);
       
    }

    getBookMarks();
   
}, []);

const onDeleteClick=async (bookMark)=>{
     await axios.post('/api/BookMarks/deletebookmark',{...bookMark}); 
    history.push('/mybookmark')
    history.push('/mybookmarks')
    
 }
 const onEditClick= async (bookMark)=>{
 
        setIsEdit(bookMark.id)
        setTitle(bookMark.title)
        console.log(bookMarks);
}
const onCancelClick= ()=>{
 
    setIsEdit(0);
  
}
const onTextChange=(e)=>{
setTitle(e.target.value);
}
const onUpdateClick=async (bookMark)=>{
    const{id, url,userId}=bookMark;
    await axios.post('/api/BookMarks/updatebookmark',{title,id,userId,url}); 
   history.push('/mybookmark')
   history.push('/mybookmarks')
   
}

    return (
        <div>
          <div>
              <div className="row">
                  <div className="col-md-12">
                      <h1>Welcome back {firstName} {lastName}</h1>
                      <Link to="/addbookmark" 
                      className="btn btn-primary btn-block">Add Bookmark</Link>
                      </div>
                      </div>
                      <div class="row">
                          <table className="table table-hover table-striped table-bordered">
                              <thead>
                                  <tr>
                                      <th>Title</th>
                                      <th>Url</th>
                                      <th>Edit/Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                        {bookMarks && bookMarks.map(m=>
                            <MyBookMarksRow
                            BookMark={m}
                            onDeleteClick={onDeleteClick}
                            onEditClick={onEditClick}
                            isEdit={isEdit}
                            onCancelClick={onCancelClick}
                            title={title}
                            onTextChange={onTextChange}
                            onUpdateClick={onUpdateClick}
                      
                            />
                            )}
                                </tbody>
                            </table>
                        </div>
                    </div>
        </div>
      
    );
}
export default MyBookMarks;