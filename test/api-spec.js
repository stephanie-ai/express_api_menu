const request = require('supertest');
const server = require('../server');

/*
testCat - testMenuItem
*/


describe('API endpoints', () => {
    let api
    let testMenuItem = {
        "name": "BBQ Chicken",
        "price": 15
    };

    before(() => {
        api = server.listen(5000, () => console.log(`\nStarting test server on port 5000\n`))
    });

    after(done => {
        console.log('\nGracefully stopping test server')
        api.close(done)
    });

    it('responds to /', done => {
        request(api)
            .get('/')
            .expect(200, done);
    });

    it('responds to get /menu', done => {
        request(api)
            .get('/menu')
            .expect(200, done);
    });

    it('responds to post /menu', done => {
        request(api)
            .post('/menu')
            .send(testMenuItem)
            .expect({id: 4, ...testMenuItem})
            .expect(201, done)
    });

    it('404 everything else', done => {
        request(server)
            .get('/BBQ Chicken')
            .expect(404, done);
    });
});