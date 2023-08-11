import {Request, Response} from "express";
import teacherService from "../service/teacherService";
import * as fs from "fs";

class TeacherController {
    private teacherService;

    constructor() {
        this.teacherService = teacherService;
    }

    findAll = async (req: Request, res: Response) => {
        let listTeacher = await this.teacherService.findAll(req.query.name,req.query.age , req.query.salary)
        res.json(listTeacher)
    }
    add = async (req: Request, res: Response) => {
        let listTeacher = await this.teacherService.add(req.body);
        res.json('thêm thành công');
    }
    delete = async (req:Request , res:Response)=>{
        let data = await this.teacherService.delete(req.params.id)
        res.json("xóa thành công")
    }
    update = async (req:Request, res:Response)=>{
        let data = await this.teacherService.update(req.params.id, req.body)
        res.json("sửa thành công")
    }
    findById = async (req:Request, res:Response)=>{
        let data = await this.teacherService.update(req.params.id)
        res.json(data)
    }


}

export default new TeacherController();
