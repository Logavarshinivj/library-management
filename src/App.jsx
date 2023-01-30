import './App.css'
import { Routes, Route, Link } from "react-router-dom";

import { MovieList } from './MovieList';
import { Addcolor } from './Addcolor';
export default function App() {
  return(
    <div className="App">
      {/* <MovieList /> */}
       {/* <Addcolor /> */}
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/color-game" element={<Addcolor />} />
      </Routes>
    </div>
  )
}

function Home(){
  return(
    <div>
      <h1>Welcome to the movie app🎉🎉❤️‍🔥</h1>
    </div>
  )
}


