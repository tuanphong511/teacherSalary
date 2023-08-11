"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controller/userController"));
const UserRouter = (0, express_1.Router)();
UserRouter.post('/login', userController_1.default.login);
UserRouter.post('/register', userController_1.default.register);
exports.default = UserRouter;
//# sourceMappingURL=userRouter.js.map