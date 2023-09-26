import express, { Express, Request, Response, Router } from "express";
import { getPost } from "../../models/post.models";
export const postRoute: Router = express.Router();

postRoute.get("/", async (req: Request, res: Response) => {
  const data = await getPost();
  res.json(data).status(200);
});
