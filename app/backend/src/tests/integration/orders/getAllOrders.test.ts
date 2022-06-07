import * as chai from 'chai'
import chaiHttp = require('chai-http')
import { app } from '../../../app'
import 'mocha'
const { expect } = chai

chai.use(chaiHttp)

const order = {
  name: 'Marcos',
  phone: '12345678901',
  district: 'Sao paulo',
  street: 'Rua dos bobos',
  foods: ['Arroz branco', 'Feijão preto'],
  number: 123
}

const foods = [
  { foodType: 'Arroz', id: 1, name: 'Arroz branco' },
  { foodType: 'Feijão', id: 5, name: 'Feijão preto' }
]
describe('getAll Orders route /orders testing', () => {
  it('getAll Orders return objects with proper properties', async () => {
    const resPost = await chai.request(app).post('/orders')
      .type('json')
      .send(order)
    const user = resPost.body
    expect(user).to.be.an('object')

    const res = await chai.request(app).get('/orders')
    const i = user.id - 1
    const orders = res.body
    expect(orders).to.be.an('array')
    expect(orders).to.have.lengthOf(user.id)
    expect(orders[i]).to.have.property('id', user.id)
    expect(orders[i]).to.have.property('name', order.name)
    expect(orders[i]).to.have.property('phone', order.phone)
    expect(orders[i]).to.have.property('district', order.district)
    expect(orders[i]).to.have.property('street', order.street)
    expect(orders[i]).to.have.property('foods').to.be.an('array').to.deep.eq(foods)
    expect(orders[i]).to.have.property('number', order.number)
  })
})
