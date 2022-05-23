import * as chai from 'chai'
import chaiHttp = require('chai-http')
import { app } from '../../../app'
import 'mocha'
import IFoodType from '../../../interfaces/Food'
const { expect } = chai

chai.use(chaiHttp)

describe('Route /subTypes testing', () => {
  it('getAllTypes returns an array', async () => {
    const res = await chai.request(app).get('/foods/subTypes')
    expect(res.body).to.be.an('array')
  })

  it('getAllSubTypes returns an array with proper properties', async () => {
    const res = await chai.request(app).get('/foods/types')
    res.body.forEach((subType: IFoodType) => {
      expect(subType).to.have.property('id')
      expect(subType).to.have.property('name')
    })
  })
})
