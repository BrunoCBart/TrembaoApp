import * as chai from 'chai'
import chaiHttp = require('chai-http')
import { app } from '../../../app'
import 'mocha'
const { expect } = chai

chai.use(chaiHttp)

const order = {
  name: 'Bruno',
  phone: '12345678901',
  district: 'Sao paulo',
  street: 'Rua dos bobos',
  foods: ['Arroz branco', 'Feijão preto'],
  number: 123
}

describe('create Order route /orders testing', () => {
  it('create Order return objects with proper properties', async () => {
    const res = await chai.request(app).post('/orders')
      .type('json')
      .send(order)

    const user = res.body
    expect(user).to.be.an('object')
    expect(user).to.have.property('id', 1)
    expect(user).to.have.property('name', order.name)
    expect(user).to.have.property('phone', order.phone)
    expect(user).to.have.property('districtId', 1)
    expect(user).to.have.property('streetId', 1)
    expect(user).to.have.property('foods').to.be.an('array').to.deep.eq(order.foods)
    expect(user).to.have.property('number', order.number)
  })
})
