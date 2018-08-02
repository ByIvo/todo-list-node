import express from 'express';
import TasksController from '../controllers/tasks';

const router = express.Router();
const tasksController = new TasksController();

router.get('/', (req, res) => tasksController.get(req, res));

export default router;