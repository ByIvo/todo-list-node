import TasksController from '../../../src/controllers/tasks';
import sinon from 'sinon';

describe('Controllers: Tasks', () => {
    const defaultTask = {
        name: 'Task name',
        description: 'Task description',
        status: 'TODO'
    };

    const defaultRequest = {
        params: {}
    };

    describe('get() tasks', () => {
       it('should call send with a list of products', () => {
            const response = {
                send: sinon.spy()
            };
    
            const tasksController = new TasksController();
            tasksController.get(defaultRequest, response)
            .then(() => {
                sinon.assert.calledWith(response.send, [defaultTask]);
            });
            
       });
    });
});