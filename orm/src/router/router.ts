import {Router} from "express";
import teacherRouter from "./teacherRouter";
import userRouter from "./userRouter";

const router = Router();
router.use('/teachers', teacherRouter);
router.use('', userRouter);
export default router;
