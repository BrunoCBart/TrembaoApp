export interface IOrderCreate {
  name: string;
  phone: string;
  district: string;
  street: string;
  foods: number[];
  number: number;
  reference?: string;
}

interface IOrder {
  id?: number
  name: string;
  phone: string;
  districtId: number;
  streetId: number;
  foods: number[];
  number: number;
  reference?: string;
}

export default IOrder
