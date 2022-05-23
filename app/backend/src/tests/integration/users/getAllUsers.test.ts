import * as chai from 'chai'
import chaiHttp = require('chai-http')
import { app } from '../../../app'
import 'mocha'
import { IUser } from '../../../interfaces/User'
const { expect } = chai

chai.use(chaiHttp)

describe('getAllUsers route /users testing', () => {
  it('getAllUsers returns an array', async () => {
    const res = await chai.request(app).get('/users')
    expect(res.body).to.be.an('array')
  })

  it('getAllUsers returns an array of objects', () => {
    chai.request(app)
      .get('/users')
      .then((res) => {
        res.body.forEach((user: IUser) => {
          expect(user).to.be.an('object')
        })
      })
  })

  it('getAllUsers return objects with proper properties', async () => {
    const res = await chai.request(app).get('/users')
    res.body.forEach((user: IUser) => {
      expect(user).to.have.property('id')
      expect(user).to.have.property('username')
      expect(user).to.have.property('password')
      expect(user).to.have.property('createdAt')
      expect(user).to.have.property('updatedAt')
    })
  })
})
