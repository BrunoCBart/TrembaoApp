import * as chai from 'chai'
import chaiHttp = require('chai-http')
import { app } from '../../../app'
import 'mocha'
const { expect } = chai

chai.use(chaiHttp)

describe('Route /foods testing', () => {
  it('getAll returns an array of foods with proper properties', async () => {
    const res = await chai.request(app).get('/foods')
    res.body.forEach((food: any) => {
      expect(food).to.have.property('foodType')
      expect(food).to.have.property('foods')
    })
  })
})
