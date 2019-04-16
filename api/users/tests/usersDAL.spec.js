const mongoose = require('mongoose')
const User = require('../models/user')
const usersDAL = require('../api/usersDAL')
const { random } = require('faker')
require('dotenv').config()

describe('Users Data Access Layer', () => {
    const connOptions = { useNewUrlParser: true }

    describe('.createUser', () => {
        const userOptions = {}

        describe('success', () => {
            const user = random.word()
            let result

            beforeAll(async () => {
                jest.spyOn(mongoose, 'connect').mockResolvedValue({})
                jest.spyOn(User, 'create').mockResolvedValue(user)
                jest.spyOn(mongoose, 'disconnect').mockResolvedValue({})

                result = await usersDAL.createUser(userOptions)
            })

            afterAll(() => {
                jest.restoreAllMocks()
            })

            it('opens a database connection', () => {
                expect(mongoose.connect).toHaveBeenCalledWith(process.env.MLAB_CONN, connOptions)
            })

            it('creates a user', () => {
                expect(User.create).toHaveBeenCalledWith(userOptions)
            })

            it('closes the database connection', () => {
                expect(mongoose.disconnect).toHaveBeenCalled()
            })

            it('returns the user', () => {
                expect(result).toEqual(user)
            })
        })

        describe('failure', () => {
            describe('when connecting to the database fails', () => {
                const err = new Error()
                let result

                beforeAll(async () => {
                    jest.spyOn(mongoose, 'connect').mockRejectedValue(err)

                    result = await usersDAL.createUser(userOptions)
                })

                afterAll(() => {
                    jest.restoreAllMocks()
                })

                it('returns a error', () => {
                    expect(result).toEqual(err)
                })
            })
        })
    })

    describe('.getUser', () => {
        const id = random.number()

        describe('success', () => {
            const user = random.word()
            let result

            beforeAll(async () => {
                jest.spyOn(mongoose, 'connect').mockResolvedValue({})
                jest.spyOn(User, 'findById').mockResolvedValue(user)
                jest.spyOn(mongoose, 'disconnect').mockResolvedValue({})

                result = await usersDAL.getUser(id)
            })

            afterAll(() => {
                jest.restoreAllMocks()
            })

            it('opens a database connection', () => {
                expect(mongoose.connect).toHaveBeenCalledWith(process.env.MLAB_CONN, connOptions)
            })

            it('retrieves the user', () => {
                expect(User.findById).toHaveBeenCalledWith(id)
            })

            it('closes the database connection', () => {
                expect(mongoose.disconnect).toHaveBeenCalled()
            })

            it('returns the user', () => {
                expect(result).toEqual(user)
            })
        })

        describe('failure', () => {
            describe('when connecting to the database fails', () => {
                const err = new Error()
                let result

                beforeAll(async () => {
                    jest.spyOn(mongoose, 'connect').mockRejectedValue(err)

                    result = await usersDAL.getUser(id)
                })

                afterAll(() => {
                    jest.restoreAllMocks()
                })

                it('returns a error', () => {
                    expect(result).toEqual(err)
                })
            })
        })
    })

    describe('.getUserByGoogleId', () => {
        const googleId = random.number()

        describe('success', () => {
            const user = random.word()
            let result

            beforeAll(async () => {
                jest.spyOn(mongoose, 'connect').mockResolvedValue({})
                jest.spyOn(User, 'findOne').mockResolvedValue(user)
                jest.spyOn(mongoose, 'disconnect').mockResolvedValue({})

                result = await usersDAL.getUserByGoogleId(googleId)
            })

            afterAll(() => {
                jest.restoreAllMocks()
            })

            it('opens a database connection', () => {
                expect(mongoose.connect).toHaveBeenCalledWith(process.env.MLAB_CONN, connOptions)
            })

            it('retrieves the user', () => {
                expect(User.findOne).toHaveBeenCalledWith({ googleId })
            })

            it('closes the database connection', () => {
                expect(mongoose.disconnect).toHaveBeenCalled()
            })

            it('returns the user', () => {
                expect(result).toEqual(user)
            })
        })

        describe('failure', () => {
            describe('when connecting to the database fails', () => {
                const err = new Error()
                let result

                beforeAll(async () => {
                    jest.spyOn(mongoose, 'connect').mockRejectedValue(err)

                    result = await usersDAL.getUserByGoogleId(googleId)
                })

                afterAll(() => {
                    jest.restoreAllMocks()
                })

                it('returns a error', () => {
                    expect(result).toEqual(err)
                })
            })
        })
    })
})