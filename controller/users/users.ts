import { getUsers } from "../../models/users.models";
import express, { Request, Response, Router } from "express";

export const usersRoute: Router = express.Router();

usersRoute.get("/", async (req: Request, res: Response) => {
  const data = await getUsers();
  res.json(data);
});
