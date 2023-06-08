import { ListOfBooks } from "./ListOfBooks";
import { AddBook } from './AddBook';
import { useState,useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { backdropClasses } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export function BookList() {
  const navigate=useNavigate()
  const [books, setBooks] = useState([]);
 
  const getBooks=()=>{
    fetch("https://647ef9cdc246f166da8fcd4e.mockapi.io/library")
    .then((data)=>data.json())
     .then((mvs)=>setBooks(mvs))
  }
  
  useEffect(()=>getBooks(),[])

const DeleteBook=(id)=>{
  console.log("deleting movie...",id)
  fetch(`https://647ef9cdc246f166da8fcd4e.mockapi.io/library/${id}`,{
    method: "DELETE"
  })
  .then(()=>getBooks())

}
 
  return (
    <div>
    
      <div className="book-list">
        {books.map((bk, index) => (
          <ListOfBooks key={index} book={bk} id={bk.id} deleteButton={<IconButton sx={{marginLeft:"auto"}} onClick={()=>DeleteBook(bk.id)}><DeleteIcon  color="error"/></IconButton>}  editIcon={
            <IconButton onClick={() => navigate(`/editbook/${bk.id}`)}
            aria-label="delete"
              color="primary"
            >
              <EditIcon />
            </IconButton>
          } />
        ))}

      </div>
    </div>

  );
        }


