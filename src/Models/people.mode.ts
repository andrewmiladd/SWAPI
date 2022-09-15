import { Router, Response, Request, NextFunction } from "express";
import fetch from "node-fetch";

export let getAllPeople = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let response = await fetch("https://swapi.dev/api/people");
    const data = await response.json();
    res.send(data);
    next();
  } catch (err) {
    res.send(err);
  }
};

export let getonePerson = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let link = req.originalUrl.split("/");

    let response = await fetch(`https://swapi.dev/api/people/${link[3]}`);
    const data = await response.json();
    res.send(data);
    next();
  } catch (err) {
    res.send(err);
  }
};
