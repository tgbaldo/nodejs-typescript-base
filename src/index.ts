import dotenv from "dotenv";
import express from "express";
import path from "path";
import { auth } from "./middlewares/auth";
import { router } from "./router";

dotenv.config();

const port = process.env.SERVER_PORT;

const app = express();

app.use(auth);
app.use("/", router);

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
