export interface IFoodCreate {
  name: string;
  price: number;
  foodType: string;
}

export interface IFoodUpdate {
  name: string;
  price: number;
}

export interface IIFood {
  id: number;
  name: string;
  price: number;
  foodTypeId: Number;
  onMenu: boolean;
}

export enum Name {
  Arroz = 'Arroz',
  Bebidas = 'Bebidas',
  Feijão = 'Feijão',
  Guarnições = 'Guarnições',
  Misturas = 'Misturas',
  Saladas = 'Saladas',
}

export interface IFood {
  id: number;
  name: string;
  price: number;
  foodType: Name;
  foodTypeId: number;
  onMenu: boolean;
}

export interface FoodsByTheme {
  id: number;
  name: Name;
  image: string;
  foodThemeId: number;
  foodTheme: string;
  foods: IFood[];
}
