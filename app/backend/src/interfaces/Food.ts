export interface IFoodCreate {
  name: string;
  price: number;
  foodType: string;
}

export interface IFoodUpdate {
  name: string;
  price: number;
}

interface IFood {
  id: number;
  name: string;
  price: number;
  foodTypeId: Number;
  onMenu: boolean;
}

export default IFood
