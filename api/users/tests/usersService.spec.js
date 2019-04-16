const usersService = require('../services/usersService')
const usersDAL = require('../api/usersDAL')
const { random } = require('faker')

describe('Users Service', () => {
    describe('.createUser', () => {
        const profile = {
            id: random.number(),
            displayName: random.word(),
            _json: { image: { url: random.word() } }
        }

        const userOptions = {
            googleId: profile.id,
            username: profile.displayName,
            thumbnail: profile._json.image.url
        }
        
        const response = {}
        let result

        beforeAll(async () => {
            jest.spyOn(usersDAL, 'createUser').mockReturnValue(response)

            result = await usersService.createUser(profile)
        })

        afterAll(() => {
            jest.restoreAllMocks()
        })

        it('calls the userDAL', () => {
            expect(usersDAL.createUser).toHaveBeenCalledWith(userOptions)
        })

        it('returns the user', () => {
            expect(result).toEqual(response)
        })

    })

    describe('.getUser', () => {
        const id = random.number()
        const response = {}
        let result

        beforeAll(async () => {
            jest.spyOn(usersDAL, 'getUser').mockReturnValue(response)

            result = await usersService.getUser(id)
        })

        afterAll(() => {
            jest.restoreAllMocks()
        })

        it('calls the userDAL', () => {
            expect(usersDAL.getUser).toHaveBeenCalledWith(id)
        })

        it('returns the user', () => {
            expect(result).toEqual(response)
        })

    })

    describe('.getUserByGoogleId', () => {
        const googleId = random.number()
        const response = {}
        let result

        beforeAll(async () => {
            jest.spyOn(usersDAL, 'getUserByGoogleId').mockReturnValue(response)

            result = await usersService.getUserByGoogleId(googleId)
        })

        afterAll(() => {
            jest.restoreAllMocks()
        })

        it('calls the userDAL', () => {
            expect(usersDAL.getUserByGoogleId).toHaveBeenCalledWith(googleId)
        })

        it('returns the user', () => {
            expect(result).toEqual(response)
        })

    })
 
})