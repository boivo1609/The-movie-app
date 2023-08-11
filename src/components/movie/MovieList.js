import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import MovieCard from "./MovieCard";
import { fetcher } from "../../Config";
import useSWR from "swr";
//https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>
const MovieList = ({ type = "now_playing" }) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=37da003081143b89a2cbe66bdf8fe6d9`,
    fetcher
  );            
  const movies = data?.results || [];                                                                     
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
