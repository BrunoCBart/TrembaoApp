import * as chai from 'chai'
import * as sinon from 'sinon'
import UserService from '../../../services/User'
import User from '../../../database/models/User'

// jest.mock('../../../services/User')

const { expect } = chai
describe('createUser users testing from service', () => {
  const userService = new UserService()
  const newUser = {
    id: 1,
    username: 'Marcos',
    password: 'kk3po2KSDO',
    admin: false
  } as User
  before(() => {
    sinon.stub(User, 'create').resolves(newUser)
  })

  it('createUser returns and object with proper properties', async () => {
    const users = await userService.create({ username: 'Marcos', password: 'kk3po2KSDO' })
    expect(users).to.be.an('object')
    expect(users).to.have.property('id')
    expect(users).to.have.property('username')
    expect(users).to.have.property('password')
    expect(users).to.have.property('admin')
  })
})
