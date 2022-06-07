interface IFoodType {
  id: number;
  name: string;
  image?: string;
}

export interface IFoodUpdate {
  name: string;
  price: number;
  foodType: string;
  foodSubType: string;
}

export default IFoodType
