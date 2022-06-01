import * as chai from 'chai'
import chaiHttp = require('chai-http')
import { app } from '../../../app'
import 'mocha'
import { firstFood, updatedFood } from '../../mocks/food'
const { expect } = chai

chai.use(chaiHttp)

describe('update Route /foods testing', () => {
  afterEach(async () => {
    await chai.request(app).put('/foods/1').send(firstFood)
  })
  it('Update first food should return proper values', async () => {
    await chai.request(app).put('/foods/1')
      .send(updatedFood)
    const res = await chai.request(app).get('/foods/all')
    expect(res.body[0].name).to.equal('Pizza')
    expect(res.body[0].price).to.equal(10)
  })
})
