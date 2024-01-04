import React, { useEffect, useState } from "react";
import { API_KEY, imageURL } from "../../contants/constants";
import './post.css';
import axios from '../axios';
import YouTube from 'react-youtube';

function Post(props) {
  const [movies, setMovies] = useState([])
  const [youtubeUrl, setYoutubeUrl] = useState(null)

  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setMovies(response.data.results)
    })
  }, [props.url])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      const results = response.data.results;
      if (results.length !== 0) {
        setYoutubeUrl(results[0])
      } else {
        setYoutubeUrl(null); // Set youtubeUrl to null when trailer is not available
      }
    }).catch((error) => {
      setYoutubeUrl(null); // Set youtubeUrl to null in case of error
      console.log("Error retrieving movie trailer:", error);
    });
  }

  return (
    <div className="post">
      <h2>{props.title}</h2>
      <div className={props.Small ? 'small-posters' : "posters"}>
        {movies.map((obj) => (
          <img
            key={obj.id}
            onClick={() => handleMovie(obj.id)}
            src={`${imageURL}${obj.backdrop_path}`}
            alt="poster"
          />
        ))}
      </div>
      {youtubeUrl && <YouTube videoId={youtubeUrl.key} opts={opts} />}
    </div>
  );
}

export default Post;
