import { useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const formValidationSchema = yup.object({
  img: yup.string().required("Enter a valid url"),
  name: yup.string().required(),
  author: yup.string().required(),
  genre: yup.string().required(),
  year: yup.string().required(),
});

export function AddBook() {
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        img: "",
        name: "",
        author: "",
        genre: "",
        year: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (newbook) => {
        newBook(newbook);
      },
    });
  const newBook = async (newbook) => {
    await fetch("https://647ef9cdc246f166da8fcd4e.mockapi.io/library", {
      method: "POST",
      body: JSON.stringify(newbook),
      headers: { "Content-Type": "application/json" },
    });
    navigate("/books");
  };
  return (
    <div>
      <form className="book-submit" onSubmit={handleSubmit}>
        <div className="add-book">
          <h1>Add Book Details 😊</h1>
          <TextField
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            label="Name"
            variant="outlined"
            error={touched.name && errors.name}
            helperText={touched.name && errors.name ? errors.name : null}
          />
        <TextField
            name="img"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.img}
            label="Image"
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
           label="Genre"
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
          
          <Button variant="contained" type="submit">
            Add book
          </Button>
        </div>
      </form>
    </div>
  );
}