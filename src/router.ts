import { Request, Response, Router } from "express";
import exampleService from "./domains/example/exampleService";

export const router = Router();

router.get("/check-email/:email", (req: Request, res: Response) => {
    const checkEmail = exampleService.checkEmail(
        req.params.email
    );

    const statusCode = checkEmail ? 200 : 400;

    return res.status(statusCode).send({
        email: req.params.email,
        check: checkEmail
    });
});
