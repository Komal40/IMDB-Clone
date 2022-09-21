import React, { Fragment, useEffect, useState } from "react";
import Card from "../card/Card";
import "./MovieList.css";
import { useParams } from "react-router-dom";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=90a912cb59f2e9ea7a1f69316f76d6f0`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  return (
    <Fragment>
      <div className="movie__list">
        <h2 className="list__title">
          {(type ? type : "POPULAR").toUpperCase()}
        </h2>
        <div className="list__cards">
          {movieList.map((movie, idx) => (
            <Card movie={{ movie }} key={idx} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default MovieList;
