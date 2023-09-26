"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const post_1 = require("./controller/post/post");
const users_1 = require("./controller/users/users");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = Number(process.env.PORT);
app.use("/post", post_1.postRoute);
app.use("/users", users_1.usersRoute);
app.listen(port, () => {
    console.log(`Server runing on localhost:${port}`);
});
