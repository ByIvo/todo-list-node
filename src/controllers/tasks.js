
class TasksController {

    constructor() {
        this.persistedTasks = [{
            name: 'Task name',
            description: 'Task description',
            status: 'TODO'
        }];
    }

    get(req, res) {       
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                res.send(this.persistedTasks);
                resolve();
             }, 200);
        });
    }
}

export default TasksController;