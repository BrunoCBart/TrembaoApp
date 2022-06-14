const bcrypt = require('bcrypt')

const { arroz, feijao, misturas, guarnicoes, saladas } = require('../data/comidas')
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      username: 'admin',
      password: await bcrypt.hash('mysecretpw', bcrypt.genSaltSync(8)),
      admin: true
    }])

    const imagePath = 'http://localhost:4000/images/'

    await queryInterface.bulkInsert('FoodThemes', [
      { name: 'Marmitex', image: `${imagePath}marmitex.jpg` }
    ])

    await queryInterface.bulkInsert('FoodTypes', [
      { name: 'Arroz', foodThemeId: 1, image: `${imagePath}arroz.jpg` },
      { name: 'Feijão', foodThemeId: 1, image: `${imagePath}feijao.png` },
      { name: 'Misturas', foodThemeId: 1, image: `${imagePath}misturas.jpeg` },
      { name: 'Guarnições', foodThemeId: 1, image: `${imagePath}guarnicoes.jpg` },
      { name: 'Saladas', foodThemeId: 1, image: `${imagePath}saladas.jpg` },
      { name: 'Bebidas', foodThemeId: 1, image: `${imagePath}bebidas.jpeg` }
    ], {})

    // 1- Itens Gerais / 2- Misturas / 3 - Guranições / 4- Saladas / 5- Bebidas
    // 1- Arroz / 2- Feijão / 3- Carne Bovina / 4- Carne Suina / 5- Carne de Frango / 6- Linguiça / 7- Ovos / 8- Peixe
    await queryInterface.bulkInsert('Foods', [
      ...arroz,
      ...feijao,
      ...misturas,
      ...guarnicoes,
      ...saladas
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
    await queryInterface.bulkDelete('FoodTypes', null, {})
    await queryInterface.bulkDelete('FoodSubTypes', null, {})
  }
}
