import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  img: yup.string().required("Enter a valid url"),
  name: yup.string().required(),
  author: yup.string().required(),
  genre: yup.string().required(),
  year: yup.string().required(),
});

export function EditBook(){
  const [book, setBook] = useState(null);
  const {id}=useParams()
useEffect(()=>{
  fetch(`https://647ef9cdc246f166da8fcd4e.mockapi.io/library/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  
}, [id]);
  return book ?<EditBookForm book={book}/>:<h1>loading...</h1>
   }

function EditBookForm({book}) {
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        img: book.img,
        name: book.name,
        author: book.author,
        genre: book.genre,
        year:book.year ,
      },
      validationSchema: formValidationSchema,
      onSubmit: (updatebook) => {
        updateBook(updatebook);
      },
    });
  const updateBook  = (updatebook) => {
    
     fetch(`https://647ef9cdc246f166da8fcd4e.mockapi.io/library/${book.id}`,
      {
        method: "PUT",
        body: JSON.stringify(updatebook),
        headers: { "Content-Type": "application/json" },
      })
      navigate("/books");
  };
  return (
    <div>
      <form className="book-submit" onSubmit={handleSubmit}>
      <div className="edit-book">
        <h1>Edit Book Details 😊</h1>
        <TextField
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            label="img"
            variant="outlined"
            error={touched.name && errors.name}
            helperText={touched.name && errors.name ? errors.name : null}
          />
        <TextField
            name="img"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.img}
            label="img"
            variant="outlined"
            error={touched.img && errors.img}
            helperText={touched.img && errors.img ? errors.img : null}
           
          />
          
          <TextField
            name="author"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.author}
            label="Author"
            variant="outlined"
            error={touched.author && errors.author}
            helperText={touched.author && errors.author ? errors.author : null}
          />
          <TextField
           name="genre"
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.genre}
           label="genre"
           variant="outlined"
           error={touched.genre && errors.genre}
           helperText={touched.genre && errors.genre ? errors.genre : null}
          />
          <TextField
            name="year"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.year}
            label="Year"
            variant="outlined"
            error={touched.year && errors.year}
            helperText={touched.year && errors.year ? errors.year : null}
          />
        <Button color="success" variant="contained" type="submit">
          Update Book
        </Button>
      </div>
      </form>
    </div>
  )};