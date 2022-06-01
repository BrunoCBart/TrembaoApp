import * as chai from 'chai'
import chaiHttp = require('chai-http')
import { app } from '../../../app'
import 'mocha'
import { createFood } from '../../mocks/food'
const { expect } = chai

chai.use(chaiHttp)

describe('create Route /foods testing', () => {
  let lastIndex: number
  afterEach(async () => {
    await chai.request(app).delete(`/foods/${lastIndex}`)
  })
  it('Food should be created', async () => {
    await chai.request(app).post('/foods').send(createFood)
    const res = await chai.request(app).get('/foods/all')
    lastIndex = res.body.length - 1
    expect(res.body[lastIndex].name).to.equal(createFood.name)
    expect(res.body[lastIndex].foodTypeId).to.equal(1)
  })
})
