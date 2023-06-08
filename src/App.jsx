import './App.css'
import { Routes, Route,  useNavigate} from "react-router-dom";

import { BookList } from './BookList';

import { AddBook } from './AddBook';
import { EditBook } from './EditBook';
import { Home } from './Home';
import { NotFound } from './NotFound';
import {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { minHeight } from '@mui/system';
import { PageOfMovies } from './PageOfMovies';


export default function App() {
  const [books, setBooks] = useState([]);
  const [mode,setMode]=useState("dark")
  const Navigate=useNavigate()
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const bgstyles={
    borderRadius:0,
    minHeight:"100vh",
  };
 
  
  
  return(
    <ThemeProvider theme={darkTheme}>
      <Paper style={bgstyles} elevation={3} >
       
    <div className="App">
       <AppBar position="static">
        <Toolbar>
          <Button onClick={()=>Navigate("/")}color="inherit">Home</Button>
          <Button onClick={()=>Navigate("/books")} color="inherit">Books</Button>
         
          <Button onClick={()=>Navigate("/add-books")}color="inherit">Add Book</Button>
          <Button sx={{marginLeft:"auto"}}color="inherit" onClick={()=>setMode(mode==="dark"?"light":"dark")}
          startIcon={mode==="dark"?<Brightness7Icon /> : <Brightness4Icon />}
          >
            {mode==="dark"?"light":"dark"} mode </Button>
        </Toolbar>
      </AppBar>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList books={books} setBooks={setBooks}/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/add-books" element={<AddBook books={books} setBooks={setBooks}/>} />
        <Route path="/editbook/:id" element={<EditBook />} /> 
      </Routes>
    </div>
    </ Paper >
    </ThemeProvider>
    
  )
}

