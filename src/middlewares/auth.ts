import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";

dotenv.config();

const requiredAuth = process.env.REQUIRED_AUTH;

export async function auth(req: Request, res: Response, next: NextFunction) {

    if (! requiredAuth) {
        next();
    }

    const token = req.headers.authorization || "";

    if (token !== "xxxxxxxxxxxxxxxxxxxxxxxxxx") {
        return res.status(401).send({
          error: "Invalid token"
        });
    }

    next();
}
