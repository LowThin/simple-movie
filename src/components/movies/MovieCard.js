import LoadingSkeleton from "../loading/LoadingSkeleton";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { tmdbAPI } from "../config";

const MovieCard = ({ item, ...props }) => {
  const { title, release_date, vote_average, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full p-3 text-white rounded-lg movie-card bg-slate-800">
      <img
        src={tmdbAPI.image500(poster_path ? poster_path : "")}
        alt=""
        className="w-full h-[254px] object-cover rounded-lg mb-3 object-top"
      />
      <div className="flex flex-col flex-1">
        <h3 className="">{title ? title : ""}</h3>
        <div className="flex items-center justify-between mb-5 text-sm opacity-50">
          <span>{release_date ? release_date : ""}</span>
          <span>{vote_average ? vote_average : ""}</span>
        </div>
        <Button onClick={() => navigate(`/movies/${id}`)}> Watch Now</Button>
      </div>
    </div>
  );
};

export default MovieCard;

export const MovieCardSkeleton = () => {
  return (
    <div className="flex flex-col h-full p-3 text-white rounded-lg movie-card bg-slate-800">
      <LoadingSkeleton className="w-full h-[254px] object-cover rounded-lg mb-3 object-top" />
      <div className="flex flex-col flex-1">
        <h3 className="mb-3 text-xl font-bold">
          <LoadingSkeleton width="100%" height="20px"></LoadingSkeleton>
        </h3>
        <div className="flex items-center justify-between mb-5 text-sm opacity-50">
          <span>
            <LoadingSkeleton width="50px" height="10px"></LoadingSkeleton>
          </span>
          <span>
            <LoadingSkeleton width="30px" height="10px"></LoadingSkeleton>
          </span>
        </div>
        <LoadingSkeleton
          width="100%"
          height="40px"
          radius="8px"
        ></LoadingSkeleton>
      </div>
    </div>
  );
};
