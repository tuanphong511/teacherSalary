"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const teacherService_1 = __importDefault(require("../service/teacherService"));
class TeacherController {
    constructor() {
        this.findAll = async (req, res) => {
            let listTeacher = await this.teacherService.findAll(req.query.name, req.query.age, req.query.salary);
            res.json(listTeacher);
        };
        this.add = async (req, res) => {
            let listTeacher = await this.teacherService.add(req.body);
            res.json('thêm thành công');
        };
        this.delete = async (req, res) => {
            let data = await this.teacherService.delete(req.params.id);
            res.json("xóa thành công");
        };
        this.update = async (req, res) => {
            let data = await this.teacherService.update(req.params.id, req.body);
            res.json("sửa thành công");
        };
        this.findById = async (req, res) => {
            let data = await this.teacherService.update(req.params.id);
            res.json(data);
        };
        this.teacherService = teacherService_1.default;
    }
}
exports.default = new TeacherController();
//# sourceMappingURL=teacherController.js.map