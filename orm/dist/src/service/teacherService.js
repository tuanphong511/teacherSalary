"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const teacher_1 = require("../entity/teacher");
const data_source_1 = require("../data-source");
class TeacherService {
    constructor() {
        this.add = async (teacher) => {
            await this.teacherRepository.save(teacher);
        };
        this.delete = async (teacher) => {
            return await this.teacherRepository.delete(teacher);
        };
        this.update = async (id, teacher) => {
            return await this.teacherRepository.update(id, teacher);
        };
        this.findById = async (id) => {
            return await this.teacherRepository.find({
                where: { id: id }
            });
        };
        this.teacherRepository = data_source_1.AppDataSource.getRepository(teacher_1.Teacher);
    }
    async findAll(name, age, salary) {
        let query = this.teacherRepository.createQueryBuilder('Teacher');
        if (name) {
            query = query.where('Teacher.name LIKE :name', { name: `%${name}%` });
        }
        else if (age) {
            query = query.where('Teacher.age = :age', { age: age });
        }
        else if (salary) {
            query = query.where('Teacher.salary = :salary', { salary: salary });
        }
        else {
            query = query.where('1=1');
        }
        return query.getMany();
    }
}
exports.default = new TeacherService();
//# sourceMappingURL=teacherService.js.map