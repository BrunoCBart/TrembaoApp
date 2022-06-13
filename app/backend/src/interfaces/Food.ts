export interface IFoodUpdate {
  name: string;
  price: number;
  foodType: string;
  foodSubType: string;
}

interface IFood {
  id: number;
  name: string;
  price: number;
  foodTypeId: Number;
  foodSubTypeId: number;
  onMenu: boolean;
}

export default IFood
