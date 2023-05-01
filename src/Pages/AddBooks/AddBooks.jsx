import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addBook } from '../../Redux/BookSlice'

const AddBooks = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const booksId = useSelector((state)=> state.booksReducer.books.length)

  const handleSubmit=(e)=>{
e.preventDefault();
const book = {id: booksId + 1, title,author};
dispatch(addBook(book));
navigate("/show-book",{replace:true})
  }

  const [title,setTitle]=useState("")
  const [author,setAuthor]=useState("")
  return (
    <div style={{textAlign:"center"}}>
      <h1>Add Books</h1>
      <form onSubmit={handleSubmit}>
        <label style={{fontSize:"1.5rem"}}>title  <input type='text' name="title" value={title} onChange={(e)=>setTitle(e.target.value)} required/></label>
        <br/>
        <label style={{marginTop:"2rem",fontSize:"1.5rem"}}>author  <input type='text' name="author" value={author} onChange={(e)=>setAuthor(e.target.value)} required/></label>
       <br/>
       <button style={{marginTop:"2rem",padding:"10px",fontSize:"1.3rem",borderRadius:"12px"}} type='submit'>AddBooks</button>
      </form>
    </div>
  )
}

export default AddBooks