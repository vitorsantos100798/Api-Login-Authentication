import { Router } from "express";
import authMiddleware from "./app/middleware/authMiddleeware";
import  UserControlher  from './app/controllers/UserController';
import AuthControlher from './app/controllers/AuthControlher';

const router = Router();

router.post('/users', UserControlher.store);

router.post('/auth', AuthControlher.authenticate);
router.get('/users',authMiddleware, UserControlher.index)

export default router;