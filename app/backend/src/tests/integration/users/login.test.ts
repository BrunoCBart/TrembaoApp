import * as chai from 'chai'
import chaiHttp = require('chai-http')
import { app } from '../../../app'
import 'mocha'
const { expect } = chai

chai.use(chaiHttp)

const session = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhVmFsdWVzIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMDgkUjVhSlFiS05VTVhjMGJReXRoQkVUT0lIRUtYMnd0VGNyN2ZuQ2gySmFLbDhoL0ZabFBpMksiLCJhZG1pbiI6dHJ1ZSwiY3JlYXRlZEF0IjoiMjAyMi0wNC0yMlQyMDozMjowNy4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMi0wNC0yMlQyMDozMjowNy4wMDBaIn0sIl9wcmV2aW91c0RhdGFWYWx1ZXMiOnsiaWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6IiQyYiQwOCRSNWFKUWJLTlVNWGMwYlF5dGhCRVRPSUhFS1gyd3RUY3I3Zm5DaDJKYUtsOGgvRlpsUGkySyIsImFkbWluIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIyLTA0LTIyVDIwOjMyOjA3LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIyLTA0LTIyVDIwOjMyOjA3LjAwMFoifSwidW5pcW5vIjoxLCJfY2hhbmdlZCI6e30sIl9vcHRpb25zIjp7ImlzTmV3UmVjb3JkIjpmYWxzZSwiX3NjaGVtYSI6bnVsbCwiX3NjaGVtYURlbGltaXRlciI6IiIsInJhdyI6dHJ1ZSwiYXR0cmlidXRlcyI6WyJpZCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJhZG1pbiIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCJdfSwiaXNOZXdSZWNvcmQiOmZhbHNlLCJpYXQiOjE2NTA2NzAxNjYsImV4cCI6MTY1MDc1NjU2Nn0.mdh0wrZ3dP6QPfuN3IUK52SIjS3Jsbo3r6BXAlYbcmc'

describe('login route /users testing', () => {
  it('login returns token', async () => {
    const res = await chai.request(app)
      .post('/users/login')
      .send({
        username: 'admin',
        password: 'mysecretpw'
      })

    expect(res.status).to.equal(200)
    expect(res.body.token).to.be.a('string')
  })

  it('Validate login returns token', async () => {
    const res = await chai.request(app)
      .get('/users/login')
      .set('Cookie', `TBsession=${session}`)

    expect(res.status).to.equal(200)
    expect(res.body.token).to.be.a('string')
  })
})
