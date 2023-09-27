import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { postRoute } from "./controller/post/post";
import { usersRoute } from "./controller/users/users";
dotenv.config();

const app: Express = express();
const port: number = Number(process.env.PORT);
app.get("/", (req: Request, res: Response) => {
  res.send("Express server is Runing");
});
app.use("/post", postRoute);
app.use("/users", usersRoute);
app.listen(port, () => {
  console.log(`Server runing on localhost:${port}`);
});
