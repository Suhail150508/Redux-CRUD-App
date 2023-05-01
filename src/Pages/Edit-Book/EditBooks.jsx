import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { updateBook } from '../../Redux/BookSlice'

const EditBooks = () => {
  const navigate= useNavigate()
    const location = useLocation()
    console.log(location)
    const dispatch = useDispatch()
  
    const [id]=useState(location.state.id)
    const [title,setTitle]=useState(location.title)
    const [author,setAuthor]=useState(location.author)
    const handleSubmit = (e) =>{
   e.preventDefault();
   dispatch(updateBook({id,title,author}))
  navigate('/show-book',{replace:true})
    }
  return (
    <div style={{textAlign:"center"}}> 
<h>Edit Book</h>

<form onSubmit={handleSubmit}>
        <label style={{fontSize:"1.5rem"}}>title  <input type='text' name="title" value={title} onChange={(e)=>setTitle(e.target.value)} required/></label>
        <br/>
        <label style={{marginTop:"2rem",fontSize:"1.5rem"}}>author  <input type='text' name="author" value={author} onChange={(e)=>setAuthor(e.target.value)} required/></label>
       <br/>
       <button style={{marginTop:"2rem",padding:"10px",fontSize:"1.3rem",borderRadius:"12px"}} type='submit'>Update</button>
      </form>

    </div>
  )
}

export default EditBooks