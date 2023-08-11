import {Teacher} from "../entity/teacher";
import {AppDataSource} from "../data-source";


class TeacherService {
    private teacherRepository;
    constructor() {
        this.teacherRepository = AppDataSource.getRepository(Teacher);
    }

    // findAll = async () => {
    //     let teacher = await this.teacherRepository.find();
    //     return teacher;
    // }

    add = async (teacher) => {
        await this.teacherRepository.save(teacher)
    }
    delete = async (teacher) =>{
        return await this.teacherRepository.delete(teacher)
    }
    update = async (id , teacher) =>{
        return await this.teacherRepository.update(id , teacher)
    }
    findById =async (id) =>{
        return await this.teacherRepository.find({
            where: {id:id}
        })
    }
    async findAll(name?: string, age?: number,salary? : number): Promise<Teacher[]> {
        let query = this.teacherRepository.createQueryBuilder('Teacher');
        if (name) {
            query = query.where('Teacher.name LIKE :name', { name: `%${name}%` });
        }else if (age) {
            query = query.where('Teacher.age = :age', {age : age });
        }else if(salary){
            query = query.where('Teacher.salary = :salary', {salary : salary });
        }
        else {
            query = query.where('1=1')
        }
        return query.getMany();
    }
}

export default new TeacherService();
