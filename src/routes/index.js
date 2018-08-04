import express from 'express';
import tasksRoute from './tasks';

const router = express.Router();

router.use('/tasks', tasksRoute);
router.use('/', (req, res) => {
    res.send('Hello World');
});

export default router;