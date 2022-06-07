import * as chai from 'chai'
import chaiHttp = require('chai-http')
import { app } from '../../../app'
import 'mocha'
const { expect } = chai

chai.use(chaiHttp)

describe('GET /foods', () => {
  it('getAll returns an array of foods with proper properties', async () => {
    const res = await chai.request(app).get('/foods')
    res.body.forEach((food: any) => {
      expect(food).to.have.property('name')
      expect(food).to.have.property('price')
      expect(food).to.have.property('foodType')
      expect(food).to.have.property('foodTypeId')
      expect(food).to.have.property('foodSubType')
      expect(food).to.have.property('foodSubTypeId')
    })
  })
})
