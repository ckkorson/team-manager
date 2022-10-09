const Engineer = require('./../lib/engineer');

describe('Engineer', () => {
    const engineer = new Engineer('Caleb', 1, 'caleb.k.korson@gmail.com', 'Engineer','ckkorson')
    describe('getGithub', () => {
        it('It should return Github: ckkorson', () => {
            expect(engineer.getGithub()).toEqual('Github: ckkorson')
        })
    })
})