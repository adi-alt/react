import React, { useState, useEffect } from "react";
import Popup from "./Popup";
import axios from "./axios";
import "./row.css";
import HalfRating from "./HalfRating";
import TypeWriterEffect from "react-typewriter-effect";
// import Rating from '@mui/material/Rating';
// import Typewriter from "typewriter-effect";

// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";
function Row({ title, fetchurl, ismain, ishori }) {
  const baseurl = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState("");
  const [moviesel, setMoviesel] = useState({});
  const [det, setDet] = useState("");
  const [rating, setRating] = useState(0);
  // const [isok, setIsok] = useState(true);
  // const MOVIE_API = "https://api.themoviedb.org/3/";
  const API_KEY = "8e52c51f7d65ec583c5e477848524554";
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(fetchurl);
      //   console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchdata();
  }, [fetchurl]);
  // useEffect(() => {
  //   function check() {
  //     return (det==movie.original_title)&&(isok)&&det;
  //   }

  // }, [isok]);

  // {https://api.themoviedb.org/3/movie/66732?api_key=8e52c51f7d65ec583c5e477848524554&append_to_response=videos}
  //   console.log(movies.length);
  // const opts = {
  //   height: "600",
  //   width: "100%",
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //   },
  // };
  const fetchMovie = async (id) => {
    const urrl = `/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const { data } = await axios.get(urrl);
    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : data.videos.results[0]);
    }
    // console.log(data);
    return data;
  };
  // setMoviesel(data)

  const selectMovie = async (movie) => {
    const data = await fetchMovie(movie.id);
    console.log(data);
    // setPlaying(false)
    // console.log(data);
    setMoviesel(data);

    // console.log(moviesel);
    // window.scrollTo(0, 0)
  };
  // const rendertrail = () => {
  //   setTrailer(
  //     moviesel.videos.results.find(vid => vid.name === "Official Trailer")
  //   );
  //   return <YouTube videoid={trailer.key} opts={opts} />;
  // };
  const Details = async (movie) => {
    console.log(movie.original_title);
    // console.log(movie.vote_average/2);
    setRating(movie.vote_average / 2);
    setDet(movie?.title || movie?.original_name || movie?.name);
    return det;
  };
  return (
    <div>
      <h1 className="tit">{title}</h1>
      <div className="con">
        <div className="row_area">
          {movies.map((movie) => (
            // {console.log(movie)}
            <div className="dum">
              <img
                onClick={() => {
                  selectMovie(movie);
                  setPlaying(true);
                }}
                key={movie.id}
                src={`${baseurl}${
                  ismain ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                className={`row-item ${ishori && "row-hori"}`}
                onMouseEnter={() => {
                  Details(movie);
                }}
                onMouseLeave={() => {
                  Details({});
                }}
              />
              <div
                className="humpty"
                onMouseEnter={() => {
                  Details(movie);
                }}
                onMouseLeave={() => {
                  Details({});
                }}
              >
                <h1>
                  {det ==
                    (movie?.title || movie?.original_name || movie?.name) &&
                    det}
                </h1>
                {console.log(rating)}
                {det ==
                  (movie?.title || movie?.original_name || movie?.name) && (
                  <HalfRating valu={rating} />
                )}

                {/* <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString())
                      .start();
                  }}
                /> */}

                {/* <Typography component="legend">Read only</Typography> */}
                {/* <Rating name="read-only" value={5} readOnly /> */}
                {/* <Rating name="disabled" value={5} disabled /> */}
                {det ==
                  (movie?.title || movie?.original_name || movie?.name) && (
                  <TypeWriterEffect
                    startDelay={100}
                    cursorColor="white"
                    text={movie.overview}
                    typeSpeed={12}
                    textStyle={{
                      // fontFamily: 'Red Hat Display',
                      // color: '#3F3D56',
                      fontWeight: 500,
                      fontSize: '15px',
                    }}
                    // scrollArea={myAppRef}
                  />
                )}
              </div>

              {/* </div> */}
              {/* check(movie); */}
            </div>
          ))}
          {/* {(det==movie.original_title)&&det} */}
        </div>
      </div>
      {/* {playing&&<YouTube videoId={trailer.key} opts={opts} />} */}
      {playing && <Popup trailerKey={trailer.key} movie={moviesel} />}
      {/* {trailer&&<YouTube videoId={trailer} opts={opts} className=""/>} */}
      {/* {moviesel.video ? rendertrail() : null} */}
    </div>
  );
}
// string intabulation
export default Row;
