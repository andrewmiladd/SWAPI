import { Router, Response, NextFunction } from "express";

import { getAllMovies, getoneMovie } from "../../Models/movies.model";

let moviesRoutes = Router();

moviesRoutes.get("/", getAllMovies);
moviesRoutes.get("/:id", getoneMovie);

export default moviesRoutes;
