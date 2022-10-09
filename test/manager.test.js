const Manager = require('./../lib/manager');

describe('Manager', () => {
    const manager = new Manager('Caleb', 1, 'caleb.k.korson@gmail.com', 'Engineer','1A')
    describe('getOffice', () => {
        it('It should return Office Number: 1A', () => {
            expect(manager.getOffice()).toEqual('Office Number: 1A')
        })
    })
})