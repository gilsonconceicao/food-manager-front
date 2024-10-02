import { OrderItems } from "../@types/generic";
import { FoodCategoryEnum } from "../Enums/FoodCategoryEnum";

export interface Food {
  id: string;
  name: string;
  url: string;
  description: string;
  isAvailable: boolean;
  price: number;
  category?: FoodCategoryEnum | null;
  items: OrderItems[];
  createdAt: Date;
}