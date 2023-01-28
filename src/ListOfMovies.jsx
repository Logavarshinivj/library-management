import { useState } from 'react';
import { Counter } from "./Counter";

// function ListOfMovies({name,poster,rating,summary}){

export function ListOfMovies({ movie }) {
  const styles = {
    color: movie.rating > 8.5 ? "green" : "red",
    backgroundColor: "orange",
  };
  const [show, setShow] = useState(false);
  // const summaryStyles={
  //   display:show?"block":"none",
  // }
  return (
    <div className="movie-container">
      <div className="movie-show">
        <img className="movie-poster" src={movie.poster} />
        <div className="movie-specs">
          <h2 className='movie-name'>{movie.name}</h2>
          <p style={styles} className='movie-rating'>⭐{movie.rating}</p>
        </div>
        <button onClick={() => setShow(!show)}>Toggle summary- {"" + show}</button>
        {/* conditional styling
            <p style={summaryStyles}className="movie-summary">{movie.summary}</p> */}

        {/* conditional rendering */}
        {show ? <p className="movie-summary">{movie.summary}</p> : null}
      </div>
      <Counter />

    </div>
  );

}
