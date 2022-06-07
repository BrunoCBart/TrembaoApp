interface IOrder {
  id?: number
  name: string;
  phone: string;
  district: number;
  street: number;
  foods: string[];
  number: number;
  reference?: string;
}

export default IOrder
