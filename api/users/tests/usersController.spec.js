const request = require('supertest');
const app = require('../../app')
const { random } = require('faker')

describe('Users Controller', () => {
    const req = { user: random.word() }

    describe('.logout', () => {
        it('sets the Location header to "/"', async () => {
            const { headers } = await request(app).get('/auth/logout').send(req)
            expect(headers.location).toEqual('/')
        })

    })

})