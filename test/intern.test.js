const Intern = require('./../lib/intern');

describe('Intern', () => {
    const intern = new Intern('Caleb', 1, 'caleb.k.korson@gmail.com', 'Engineer','Michigan Tech')
    describe('getSchool', () => {
        it('It should return School: Michigan Tech', () => {
            expect(intern.getSchool()).toEqual('School: Michigan Tech')
        })
    })
})