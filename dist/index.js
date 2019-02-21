"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const auth_1 = require("./middlewares/auth");
const router_1 = require("./router");
dotenv_1.default.config();
const port = process.env.SERVER_PORT;
const app = express_1.default();
app.use(auth_1.auth);
app.use("/", router_1.router);
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map