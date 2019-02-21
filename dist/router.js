"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const exampleService_1 = __importDefault(require("./domains/example/exampleService"));
exports.router = express_1.Router();
exports.router.get("/check-email/:email", (req, res) => {
    const checkEmail = exampleService_1.default.checkEmail(req.params.email);
    const statusCode = checkEmail ? 200 : 400;
    return res.status(statusCode).send({
        email: req.params.email,
        check: checkEmail
    });
});
//# sourceMappingURL=router.js.map