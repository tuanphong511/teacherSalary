import { Teacher } from "../entity/teacher";
declare class TeacherService {
    private teacherRepository;
    constructor();
    add: (teacher: any) => Promise<void>;
    delete: (teacher: any) => Promise<any>;
    update: (id: any, teacher: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
    findAll(name?: string, age?: number, salary?: number): Promise<Teacher[]>;
}
declare const _default: TeacherService;
export default _default;
