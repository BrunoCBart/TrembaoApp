import * as chai from 'chai'
import chaiHttp = require('chai-http')
import { app } from '../../../app'
import 'mocha'
const { expect } = chai

chai.use(chaiHttp)

describe('createUser route /users testing', () => {
  it('createUser returns an array', async () => {
    const res = await chai.request(app).post('/users')
      .type('json')
      .send({
        username: 'Bruno',
        password: 'kk3po2KSDO',
        admin: false
      })
    expect(res.body).to.be.an('object')
  })

  it('createUser return objects with proper properties', async () => {
    const res = await chai.request(app).post('/users')
      .type('json')
      .send({
        username: 'Bruno2',
        password: 'kk3po2KSDO',
        admin: true
      })

    const user = res.body

    expect(user).to.have.property('id')
    expect(user).to.have.property('username')
    expect(user).to.have.property('password')
    expect(user).to.have.property('createdAt')
    expect(user).to.have.property('updatedAt')
  })
})
