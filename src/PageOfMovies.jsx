import { useParams, useNavigate} from "react-router-dom";
import {useState,useEffect}from "react"
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function PageOfMovies() {
  const { id } = useParams();
  // const movie = movies[id];
  const[movie,setMovie]=useState({});
  useEffect(()=>{
    fetch(`https://63d7de6e5c4274b136fd5c14.mockapi.io/movies/${id}`)
    .then((data)=>data.json())
     .then((mvs)=>setMovie(mvs))
  },[id])
  const Navigate = useNavigate();
  const styles = {
    color: movie.rating > 8.5 ? "green" : "red",
    backgroundColor: "orange",
  };
  return (
    <div className='ipage'>
      <h1>Movie details page of {movie.name} </h1>
      <iframe width="885" height="498" src={movie.trailer} title="The Great Indian Kitchen - Sneak Peek | Aishwarya Rajesh | Jerry Silvester Vincent | R. Kannan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div className="movie-container1">
        <div className="movie-specs">
          <h2 className='movie-name'>{movie.name}  </h2>
          <p style={styles} className='movie-rating'>⭐{movie.rating}</p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button onClick={() => Navigate(-1)} variant="contained"> <ArrowBackIcon />Back</Button>

      </div>
    </div>
  );
}
