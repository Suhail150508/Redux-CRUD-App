import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook } from '../../Redux/BookSlice';
import { Link } from 'react-router-dom';

const ShowBooks = () => {

 const dispatch = useDispatch()
  const books = useSelector((state)=>state.booksReducer.books);

  const handleDelete=(id)=>{
  dispatch(deleteBook(id))
  }

  return (
    <div style={{textAlign:"center"}}>
  <h1>List of books</h1>
 <table style={{marginTop:"3rem",borderCollapse:"collapse",marginLeft:"28rem",fontSize:"1.2rem"}}>
  <thead>
    <tr>
      <th style={{border:"1px solid",padding:"15px"}}>id</th>
      <th style={{border:"1px solid",padding:"15px"}}>title</th>
      <th style={{border:"1px solid",padding:"15px"}}>author</th>
      <th style={{border:"1px solid",padding:"15px"}}>actions</th>
    </tr>


  </thead>
  <tbody>
  {
    books &&  books.map((book)=>{
        const {id,title,author}=book
        return(
          <tr key={id}>
          <td style={{border:"1px solid",padding:"15px"}}>{id}</td>
          <td style={{border:"1px solid",padding:"15px"}}>{title}</td>
          <td style={{border:"1px solid",padding:"15px"}}>{author}</td>
          <td style={{border:"1px solid",padding:"15px"}}>
          <Link to= "/edit-book" state={{id,title,author}}>  <button>Edit Book</button></Link> <span></span>
            <button onClick={()=>{handleDelete(id)}}>Delete</button>
            </td>    
        </tr>
        )
      })
    }
  </tbody>
 </table>

    </div>
  )
}

export default ShowBooks