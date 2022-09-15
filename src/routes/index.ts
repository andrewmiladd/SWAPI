import { Router } from "express";
import moviesRoutes from "./api/movies.routes";
import peopleRoute from "./api/people.routes";

const routes = Router();

routes.use("/movies", moviesRoutes);
routes.use("/people", peopleRoute);
export default routes;
