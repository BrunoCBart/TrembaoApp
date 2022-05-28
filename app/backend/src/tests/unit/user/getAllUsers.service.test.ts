import * as chai from 'chai'
import * as sinon from 'sinon'
import UserService from '../../../services/User'
import User from '../../../database/models/User'

const { expect } = chai
describe('getAllUsers users testing from service', () => {
  const userService = new UserService()
  const users = [
    {
      id: 1,
      username: 'Bruno',
      password: 'kk3po2KSDO',
      admin: true
    },
    {
      id: 2,
      username: 'Marcos',
      password: 'kk3po2KSDO',
      admin: false
    }
  ] as User[]
  before(() => {
    sinon.stub(User, 'findAll').resolves(users)
  })

  it('getAllUsers returns an array of objects', async () => {
    const users = await userService.getAll()
    expect(users).to.be.an('array')

    users.forEach((user) => {
      expect(user).to.be.an('object')
    })
  })

  it('getAllUsers return objects with proper properties', () => {
    const users = userService.getAll()
    users.then((users) => {
      users.forEach((user) => {
        expect(user).to.have.property('id')
        expect(user).to.have.property('username')
        expect(user).to.have.property('password')
        expect(user).to.have.property('admin')
      })
    })
  })
})
