import * as chai from 'chai'
import chaiHttp = require('chai-http')
import { app } from '../../../app'
import 'mocha'
const { expect } = chai

chai.use(chaiHttp)

describe('update Route /foods testing', () => {
  afterEach(async () => {
    await chai.request(app).put('/foods/1').send({
      name: 'Arroz branco',
      price: 0
    })
  })
  it('Update first food should return proper values', async () => {
    await chai.request(app).put('/foods/1')
      .send({
        name: 'Pizza',
        price: '10'
      })
    const res = await chai.request(app).get('/foods/all')
    expect(res.body[0].name).to.equal('Pizza')
    expect(res.body[0].price).to.equal(10)
  })
})
