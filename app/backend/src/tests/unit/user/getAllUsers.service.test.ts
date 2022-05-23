// import * as chai from 'chai'
// import * as sinon from 'sinon'
// import userService from '../../../services/User'
// import User from '../../../database/models/User'

// const { expect } = chai
// describe('getAllUsers users testing from service', () => {
//   before(() => {
//     sinon.stub(User, 'findAll').resolves(
//       [
//         {
//           id: 1,
//           username: 'Bruno'
//         },
//         {
//           id: 2,
//           username: 'Marcos'
//         }
//       ])
//   })

//   it('getAllUsers returns an array', async () => {
//     const users = await userService.getAllUsers()
//     expect(users).to.be.an('array')
//   })

//   it('getAllUsers returns an array of objects', async () => {
//     const users = await userService.getAllUsers()
//     users.forEach((user) => {
//       expect(user).to.be.an('object')
//     })
//   })

//   it('getAllUsers return objects with proper properties', () => {
//     const users = userService.getAllUsers()
//     users.then((users) => {
//       users.forEach((user) => {
//         expect(user).to.have.property('id')
//         expect(user).to.have.property('username')
//       })
//     })
//   })
// })
