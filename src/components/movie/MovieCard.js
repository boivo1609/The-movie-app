import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path, id } = item; //detructuring
  const Navigate = useNavigate(); //useNavigate la dieu huong cua react router dom
  return (
    <div className="movie-card flex flex-col rounded-lg  p-3 bg-slate-800 text-white h-full select-none">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className=" text-xl font-bold mb-3">{title}</h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <Button onClick={() => Navigate(`/movie/${id}`)} bgColor="bg-secondary">
          Watch Now
        </Button>
        {/* <button
          onClick={() => Navigate(`/movie/${id}`)} // click vao button lay duoc id cua phim do
          className="py-3 px-6 rounded-lg bg-primary w-full mt-auto"
        >
          Watch Now
        </button> */}
      </div>
    </div>
  );
};

export default MovieCard;
