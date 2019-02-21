"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const requiredAuth = process.env.REQUIRED_AUTH;
function auth(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!requiredAuth) {
            next();
        }
        const token = req.headers.authorization || "";
        if (token !== "xxxxxxxxxxxxxxxxxxxxxxxxxx") {
            return res.status(401).send({
                error: "Invalid token"
            });
        }
        next();
    });
}
exports.auth = auth;
//# sourceMappingURL=auth.js.map