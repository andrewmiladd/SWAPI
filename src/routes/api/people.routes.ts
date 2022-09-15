import { Router, Response ,NextFunction } from "express";

import { getAllPeople, getonePerson } from "../../Models/people.mode";

let peopleRoute = Router();

peopleRoute.get("/", getAllPeople );
peopleRoute.get("/:id", getonePerson);

export default peopleRoute;
