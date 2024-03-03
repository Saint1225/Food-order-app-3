export type mealItemType = {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
};

export type mealType = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type orderType = {
  meals: mealType[];
  totalAmount: number;
};
