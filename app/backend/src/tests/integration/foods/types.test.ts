import * as chai from 'chai'
import chaiHttp = require('chai-http')
import { app } from '../../../app'
import 'mocha'
import IFoodType from '../../../database/models/FoodType'
const { expect } = chai

chai.use(chaiHttp)

describe('Route /types testing', () => {
  it('getAllTypes returns an array', async () => {
    const res = await chai.request(app).get('/foods/types')
    expect(res.body).to.be.an('array')
  })

  it('getAllTypes returns an array with proper properties', async () => {
    const res = await chai.request(app).get('/foods/types')
    res.body.forEach((type: IFoodType) => {
      expect(type).to.have.property('id')
      expect(type).to.have.property('name')
    })
  })
})
