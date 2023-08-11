"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../service/userService"));
const userService_2 = __importDefault(require("../service/userService"));
class UserController {
    constructor() {
        this.register = async (req, res) => {
            let result = await userService_2.default.register(req.body);
            res.json(result);
        };
        this.login = async (req, res) => {
            let resultCheck = await userService_2.default.checkUser(req.body);
            res.status(200).json(resultCheck);
        };
        this.userService = userService_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map