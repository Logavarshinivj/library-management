import { useState } from 'react';
import { Counter } from "./Counter";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import { Expand } from '@mui/icons-material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import InfoIcon from '@mui/icons-material/Info';
import {useNavigate} from "react-router-dom";
// function ListOfMovies({name,poster,rating,summary}){

export function ListOfBooks({ book ,id,deleteButton,editIcon}) {
 
  const [show, setShow] = useState(true);
  const navigate=useNavigate();

  return (
    <Card className="book-container">
      <div className="movie-show">
        <img className="book-poster" src={book.img} />
        <div className="book-content">
        <h2 className='book-name'>{book.name}</h2>
          <p> Author: {book.author}</p>
          <p  className=''>Genre: {book.genre}</p>
          <p  className=''>Year: {book.year}</p>
        
        {/* <CardContent>
        <div className="movie-specs">
          <h2 className='movie-name'>{book.name}  
        <IconButton  onClick={() => setShow(!show)}aria-label="toggle-summary" color="primary">
        {show ? <ExpandLessIcon />: <ExpandMoreIcon /> }
      </IconButton></h2>
      
      <IconButton color="primary" aria-label="movie-info" onClick={()=>navigate(`/movies/${id}`)}><InfoIcon/></IconButton>
     
  
      

          <p>{book.author}</p>
          <p  className='movie-rating'>{book.genre}</p>
          <p  className='movie-rating'>{book.year}</p>
        </div>
        
        
        
        
        </CardContent> */}
      </div>  
      </div>
      <CardActions>
      <Counter />{deleteButton} {editIcon}
      </CardActions>

    </Card>
  );

}
