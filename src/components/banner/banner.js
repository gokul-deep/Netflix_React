import React, { useEffect, useState } from "react";
import { API_KEY, imageURL } from "../../contants/constants";
import "./banner.css";
import axios from '../axios';

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      const randomIndex = Math.floor(Math.random() * 21);
      setMovie(response.data.results[randomIndex]);
    });
  }, []);
  
  return (
    <div className="banner" style={{backgroundImage: `url(${movie ? imageURL+movie.backdrop_path : ""})`}}>
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner-buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">
          {movie ? movie.overview : ""}
        </h1>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
}

export default Banner;
