export const foodTypes = [
  { name: 'Arroz', id: 1 },
  { name: 'Feijão', id: 2 },
  { name: 'Misturas', id: 3 },
  { name: 'Guarnições', id: 4 },
  { name: 'Saladas', id: 5 },
  { name: 'Bebidas', id: 6 }
]

export const foodThemes = [
  {
    id: 1,
    name: 'Marmitex',
    image: 'http://localhost:4000/images/marmitex.jpg'
  },
  {
    id: 2,
    name: 'Tema2',
    image: null
  }
]

export const foodOptions = [
  {
    id: 1,
    name: 'Arroz',
    image: 'http://localhost:4000/images/arroz.jpg',
    foodThemeId: 1,
    foodTheme: 'Marmitex',
    foods: [
      {
        id: 1,
        name: 'Arroz branco',
        price: 0,
        foodType: 'Arroz',
        foodTypeId: 1,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: true
      },
      {
        id: 2,
        name: 'Arroz integral',
        price: 0,
        foodType: 'Arroz',
        foodTypeId: 1,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: true
      },
      {
        id: 3,
        name: 'Arroz a grega',
        price: 0,
        foodType: 'Arroz',
        foodTypeId: 1,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      }
    ]
  },
  {
    id: 2,
    name: 'Feijão',
    image: 'http://localhost:4000/images/feijao.png',
    foodThemeId: 1,
    foodTheme: 'Marmitex',
    foods: [
      {
        id: 4,
        name: 'Feijão carioca',
        price: 0,
        foodType: 'Feijão',
        foodTypeId: 2,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 5,
        name: 'Feijão preto',
        price: 0,
        foodType: 'Feijão',
        foodTypeId: 2,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 6,
        name: 'Tutu de feijão',
        price: 0,
        foodType: 'Feijão',
        foodTypeId: 2,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      }
    ]
  },
  {
    id: 3,
    name: 'Misturas',
    image: 'http://localhost:4000/images/misturas.jpeg',
    foodThemeId: 1,
    foodTheme: 'Marmitex',
    foods: [
      {
        id: 7,
        name: 'Almondegas',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne Bovina',
        foodSubTypeId: 1,
        onMenu: false
      },
      {
        id: 8,
        name: 'Bife a milanesa',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne Bovina',
        foodSubTypeId: 1,
        onMenu: false
      },
      {
        id: 9,
        name: 'Bife a role',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne Bovina',
        foodSubTypeId: 1,
        onMenu: false
      },
      {
        id: 10,
        name: 'Bife acebolado',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne Bovina',
        foodSubTypeId: 1,
        onMenu: false
      },
      {
        id: 11,
        name: 'Bife de panela',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne Bovina',
        foodSubTypeId: 1,
        onMenu: false
      },
      {
        id: 12,
        name: 'Carne de panela',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne Bovina',
        foodSubTypeId: 1,
        onMenu: false
      },
      {
        id: 13,
        name: 'Carne moida ao molho',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne Bovina',
        foodSubTypeId: 1,
        onMenu: false
      },
      {
        id: 14,
        name: 'Churrasco',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne Bovina',
        foodSubTypeId: 1,
        onMenu: false
      },
      {
        id: 15,
        name: 'Costela bovina de panela',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne Bovina',
        foodSubTypeId: 1,
        onMenu: false
      },
      {
        id: 16,
        name: 'Escondidinho de carne desfiada',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne Bovina',
        foodSubTypeId: 1,
        onMenu: false
      },
      {
        id: 17,
        name: 'Escondidinho de carne moida',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne Bovina',
        foodSubTypeId: 1,
        onMenu: false
      },
      {
        id: 18,
        name: 'Hamburguinho caseiro a milanesa',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne Bovina',
        foodSubTypeId: 1,
        onMenu: false
      },
      {
        id: 19,
        name: 'Hamburguinho caseiro',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne Bovina',
        foodSubTypeId: 1,
        onMenu: false
      },
      {
        id: 20,
        name: 'Lagarto de panela',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne Bovina',
        foodSubTypeId: 1,
        onMenu: false
      },
      {
        id: 21,
        name: 'Maminha assada',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne Bovina',
        foodSubTypeId: 1,
        onMenu: false
      },
      {
        id: 22,
        name: 'Panqueca de carne desfiada',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne Bovina',
        foodSubTypeId: 1,
        onMenu: false
      },
      {
        id: 23,
        name: 'Panqueca de carne moida',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne Bovina',
        foodSubTypeId: 1,
        onMenu: false
      },
      {
        id: 24,
        name: 'Parmegiana de carne',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne Bovina',
        foodSubTypeId: 1,
        onMenu: false
      },
      {
        id: 25,
        name: 'Rocambole de carne recheado',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne Bovina',
        foodSubTypeId: 1,
        onMenu: false
      },
      {
        id: 26,
        name: 'Strogonoff de carne',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne Bovina',
        foodSubTypeId: 1,
        onMenu: false
      },
      {
        id: 27,
        name: 'Tiras de carne acebolada',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne Bovina',
        foodSubTypeId: 1,
        onMenu: false
      },
      {
        id: 28,
        name: 'Bisteca frita',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne de Frango',
        foodSubTypeId: 3,
        onMenu: false
      },
      {
        id: 29,
        name: 'Costelinha de porco',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne de Frango',
        foodSubTypeId: 3,
        onMenu: false
      },
      {
        id: 30,
        name: 'Feijoada',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne de Frango',
        foodSubTypeId: 3,
        onMenu: false
      },
      {
        id: 31,
        name: 'File suino frito',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne de Frango',
        foodSubTypeId: 3,
        onMenu: false
      },
      {
        id: 32,
        name: 'Lombo de panela',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne de Frango',
        foodSubTypeId: 3,
        onMenu: false
      },
      {
        id: 33,
        name: 'Lombo recheado',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne de Frango',
        foodSubTypeId: 3,
        onMenu: false
      },
      {
        id: 34,
        name: 'Pernil assado',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne de Frango',
        foodSubTypeId: 3,
        onMenu: false
      },
      {
        id: 35,
        name: 'Coxa e sobrecoxa assada',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne de Frango',
        foodSubTypeId: 3,
        onMenu: false
      },
      {
        id: 36,
        name: 'Coxa e sobrecoxa ensopada',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne de Frango',
        foodSubTypeId: 3,
        onMenu: false
      },
      {
        id: 37,
        name: 'Escondidinho de frango',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne de Frango',
        foodSubTypeId: 3,
        onMenu: false
      },
      {
        id: 38,
        name: 'File de frango a milanesa',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne de Frango',
        foodSubTypeId: 3,
        onMenu: false
      },
      {
        id: 39,
        name: 'FIle de frango c/bacon',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne de Frango',
        foodSubTypeId: 3,
        onMenu: false
      },
      {
        id: 40,
        name: 'File de frango grelhado',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne de Frango',
        foodSubTypeId: 3,
        onMenu: false
      },
      {
        id: 41,
        name: 'Frango a passarinho',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne de Frango',
        foodSubTypeId: 3,
        onMenu: false
      },
      {
        id: 42,
        name: 'Frango xadrez',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne de Frango',
        foodSubTypeId: 3,
        onMenu: false
      },
      {
        id: 43,
        name: 'Fricasse de frango',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne de Frango',
        foodSubTypeId: 3,
        onMenu: false
      },
      {
        id: 44,
        name: 'Medalhao de frango',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne de Frango',
        foodSubTypeId: 3,
        onMenu: false
      },
      {
        id: 45,
        name: 'Panqueca de frango',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne de Frango',
        foodSubTypeId: 3,
        onMenu: false
      },
      {
        id: 46,
        name: 'Parmegiana de frango',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne de Frango',
        foodSubTypeId: 3,
        onMenu: false
      },
      {
        id: 47,
        name: 'Peito de frango ao cheiro verde',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne de Frango',
        foodSubTypeId: 3,
        onMenu: false
      },
      {
        id: 48,
        name: 'Strogonoff de frango',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne de Frango',
        foodSubTypeId: 3,
        onMenu: false
      },
      {
        id: 49,
        name: 'Tiras de frango grelhado',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Carne de Frango',
        foodSubTypeId: 3,
        onMenu: false
      },
      {
        id: 50,
        name: 'Linguica calabresa frita',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Linguiça',
        foodSubTypeId: 4,
        onMenu: false
      },
      {
        id: 51,
        name: 'Lingruica fina de bragança',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Linguiça',
        foodSubTypeId: 4,
        onMenu: false
      },
      {
        id: 52,
        name: 'Linguica toscana',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Linguiça',
        foodSubTypeId: 4,
        onMenu: false
      },
      {
        id: 53,
        name: 'Omelete de presunto e queijo com ervas',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Ovos',
        foodSubTypeId: 5,
        onMenu: false
      },
      {
        id: 54,
        name: 'Omelete de tomate e queijo com ervas',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Ovos',
        foodSubTypeId: 5,
        onMenu: false
      },
      {
        id: 55,
        name: 'Ovos cozidos',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Ovos',
        foodSubTypeId: 5,
        onMenu: false
      },
      {
        id: 56,
        name: 'Ovos fritos',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Ovos',
        foodSubTypeId: 5,
        onMenu: false
      },
      {
        id: 57,
        name: 'Ovos mexidos na manteiga c/queijo e bacon',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Ovos',
        foodSubTypeId: 5,
        onMenu: false
      },
      {
        id: 58,
        name: 'Omelete de espinafre e queijo',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Ovos',
        foodSubTypeId: 5,
        onMenu: false
      },
      {
        id: 59,
        name: 'File de pescada frita',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Peixe',
        foodSubTypeId: 6,
        onMenu: false
      },
      {
        id: 60,
        name: 'File de tilapia frita',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Peixe',
        foodSubTypeId: 6,
        onMenu: false
      },
      {
        id: 61,
        name: 'Iscas de cação empanadas',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Peixe',
        foodSubTypeId: 6,
        onMenu: false
      },
      {
        id: 62,
        name: 'Postas de tilapia empanada',
        price: 0,
        foodType: 'Misturas',
        foodTypeId: 3,
        foodSubType: 'Peixe',
        foodSubTypeId: 6,
        onMenu: false
      }
    ]
  },
  {
    id: 4,
    name: 'Guarnições',
    image: 'http://localhost:4000/images/guarnicoes.jpg',
    foodThemeId: 1,
    foodTheme: 'Marmitex',
    foods: [
      {
        id: 63,
        name: 'Abobora cozida',
        price: 0,
        foodType: 'Guarnições',
        foodTypeId: 4,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 64,
        name: 'Abobrinha',
        price: 0,
        foodType: 'Guarnições',
        foodTypeId: 4,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 65,
        name: 'Banana empanada',
        price: 0,
        foodType: 'Guarnições',
        foodTypeId: 4,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 66,
        name: 'Batata chips',
        price: 0,
        foodType: 'Guarnições',
        foodTypeId: 4,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 67,
        name: 'Batata soute',
        price: 0,
        foodType: 'Guarnições',
        foodTypeId: 4,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 68,
        name: 'Berinjela empanada',
        price: 0,
        foodType: 'Guarnições',
        foodTypeId: 4,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 69,
        name: 'Berinjela refogada',
        price: 0,
        foodType: 'Guarnições',
        foodTypeId: 4,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 70,
        name: 'Beterraba refogada',
        price: 0,
        foodType: 'Guarnições',
        foodTypeId: 4,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 71,
        name: 'Cenoura refogada',
        price: 0,
        foodType: 'Guarnições',
        foodTypeId: 4,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 72,
        name: 'Chuchu refogado',
        price: 0,
        foodType: 'Guarnições',
        foodTypeId: 4,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 73,
        name: 'Couve refogada',
        price: 0,
        foodType: 'Guarnições',
        foodTypeId: 4,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 74,
        name: 'Farofa caseira',
        price: 0,
        foodType: 'Guarnições',
        foodTypeId: 4,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 75,
        name: 'Mandioca frita',
        price: 0,
        foodType: 'Guarnições',
        foodTypeId: 4,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 76,
        name: 'Polenta frita',
        price: 0,
        foodType: 'Guarnições',
        foodTypeId: 4,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 77,
        name: 'Pure de batata',
        price: 0,
        foodType: 'Guarnições',
        foodTypeId: 4,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 78,
        name: 'Pure de abobora',
        price: 0,
        foodType: 'Guarnições',
        foodTypeId: 4,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 79,
        name: 'Pure de mandioca',
        price: 0,
        foodType: 'Guarnições',
        foodTypeId: 4,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 80,
        name: 'Sufle de chuchu',
        price: 0,
        foodType: 'Guarnições',
        foodTypeId: 4,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 81,
        name: 'Sufle de legumes',
        price: 0,
        foodType: 'Guarnições',
        foodTypeId: 4,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 82,
        name: 'Torresmo',
        price: 0,
        foodType: 'Guarnições',
        foodTypeId: 4,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      }
    ]
  },
  {
    id: 5,
    name: 'Saladas',
    image: 'http://localhost:4000/images/saladas.jpg',
    foodThemeId: 1,
    foodTheme: 'Marmitex',
    foods: [
      {
        id: 83,
        name: 'Alface lisa',
        price: 0,
        foodType: 'Saladas',
        foodTypeId: 5,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 84,
        name: 'Alface americana',
        price: 0,
        foodType: 'Saladas',
        foodTypeId: 5,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 85,
        name: 'Alface crespa',
        price: 0,
        foodType: 'Saladas',
        foodTypeId: 5,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 86,
        name: 'Acelga',
        price: 0,
        foodType: 'Saladas',
        foodTypeId: 5,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 87,
        name: 'Cenoura ralada',
        price: 0,
        foodType: 'Saladas',
        foodTypeId: 5,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 88,
        name: 'Beterraba ralada',
        price: 0,
        foodType: 'Saladas',
        foodTypeId: 5,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 89,
        name: 'Rabanete ralado',
        price: 0,
        foodType: 'Saladas',
        foodTypeId: 5,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 90,
        name: 'Pepino',
        price: 0,
        foodType: 'Saladas',
        foodTypeId: 5,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 91,
        name: 'Tomate',
        price: 0,
        foodType: 'Saladas',
        foodTypeId: 5,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 92,
        name: 'Couve',
        price: 0,
        foodType: 'Saladas',
        foodTypeId: 5,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 93,
        name: 'Repolho branco',
        price: 0,
        foodType: 'Saladas',
        foodTypeId: 5,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 94,
        name: 'Repolho roxo',
        price: 0,
        foodType: 'Saladas',
        foodTypeId: 5,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 95,
        name: 'Rucula',
        price: 0,
        foodType: 'Saladas',
        foodTypeId: 5,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 96,
        name: 'Escarola',
        price: 0,
        foodType: 'Saladas',
        foodTypeId: 5,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 97,
        name: 'Espinafre',
        price: 0,
        foodType: 'Saladas',
        foodTypeId: 5,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 98,
        name: 'Palmito',
        price: 0,
        foodType: 'Saladas',
        foodTypeId: 5,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 99,
        name: 'Couve flor',
        price: 0,
        foodType: 'Saladas',
        foodTypeId: 5,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 100,
        name: 'Brocolis',
        price: 0,
        foodType: 'Saladas',
        foodTypeId: 5,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 101,
        name: 'Agriao',
        price: 0,
        foodType: 'Saladas',
        foodTypeId: 5,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      },
      {
        id: 102,
        name: 'Tabule',
        price: 0,
        foodType: 'Saladas',
        foodTypeId: 5,
        foodSubType: null,
        foodSubTypeId: null,
        onMenu: false
      }
    ]
  },
  {
    id: 6,
    name: 'Bebidas',
    image: 'http://localhost:4000/images/bebidas.jpeg',
    foodThemeId: 1,
    foodTheme: 'Marmitex',
    foods: []
  }
]
