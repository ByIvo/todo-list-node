describe('Routes: Tasks', () => {
    const request = supertest(setupApp);

    const defaultTask = {
        name: 'Task name',
        description: 'Task description',
        status: 'TODO'
    };

    describe('GET /tasks', () => {
        it('should return a list of tasks', (done) => {
            request
            .get('/tasks')
            .end((err, res) => {
                expect(res.body).to.eql([defaultTask]);
                done(err);
            });
        });
    });
});