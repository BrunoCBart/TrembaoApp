// import * as chai from 'chai'
// import * as sinon from 'sinon'
// import userService from '../../../services/User'
// import User from '../../../database/models/User'

// const { expect } = chai
// describe('findUser users testing from service', () => {
//   before(() => {
//     sinon.stub(User, 'findOne').resolves(
//       {
//         id: 1,
//         username: 'Bruno',
//         password: 'kk3po2KSDO'
//       }
//     )
//   })

//   it('findUser returns an object', async () => {
//     const users = await userService.findUser()
//     expect(users).to.be.an('object')
//   })

//   it('findUser returns and object with proper properties', async () => {
//     const users = await userService.findUser()
//     expect(users).to.have.property('username')
//     expect(users).to.have.property('password')
//   })
// })
