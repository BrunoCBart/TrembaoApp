import * as chai from 'chai'
import chaiHttp = require('chai-http')
import { app } from '../../../app'
import 'mocha'
import ITheme from '../../../interfaces/Themes'
const { expect } = chai

chai.use(chaiHttp)

describe('GET /foods/themes and /foods/themes/:id', () => {
  it('getAllThemes returns an array with proper properties', async () => {

  })
  it('getAllThemes returns an array with proper properties', async () => {
    const res = await chai.request(app).get('/foods/themes')

    expect(res.body).to.be.an('array')

    res.body.forEach((theme: ITheme) => {
      expect(theme).to.have.property('id')
      expect(theme).to.have.property('name')
      expect(theme).to.have.property('image')
    })
  })
})
