import * as chai from 'chai'
import chaiHttp = require('chai-http')
import { app } from '../../../app'
import 'mocha'
const { expect } = chai

chai.use(chaiHttp)

describe('create Route /foods testing', () => {
  let lastIndex: number
  afterEach(async () => {
    await chai.request(app).delete(`/foods/${lastIndex}`)
  })
  it('Food should be created', async () => {
    await chai.request(app).post('/foods').send({
      name: 'arroz con pollo',
      foodType: 'Arroz'
    })
    const res = await chai.request(app).get('/foods/all')
    lastIndex = res.body.length - 1
    expect(res.body[lastIndex].name).to.equal('arroz con pollo')
    expect(res.body[lastIndex].foodTypeId).to.equal(1)
  })
})
