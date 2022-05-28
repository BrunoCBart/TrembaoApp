import * as chai from 'chai'
import * as sinon from 'sinon'
import UserService from '../../../services/User'
import User from '../../../database/models/User'

const { expect } = chai
describe('findUser users testing from service', () => {
  const userService = new UserService()
  before(() => {
    const user = {
      id: 1,
      username: 'Bruno',
      password: 'kk3po2KSDO'
    } as User
    sinon.stub(User, 'findOne').resolves(user)
  })

  it('findUser returns and object with proper properties', async () => {
    const user = await userService.findOne({ id: 1 })
    expect(user).to.have.property('username')
    expect(user).to.have.property('password')
  })
})
