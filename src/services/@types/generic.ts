import { Food } from "../Foods/Foods.type";
import { Order } from "../Order/Order.type";
import { User } from "../user/user.type";

export type ModelBase = {
    id: string; 
    createdAt: string; 
    isDeleted: boolean
}

export interface OrderItems {
    orderId: string;           
    order: Order;              
    food: Food;                
    user?: User | null;       
    userId?: string | null;    
    price?: number | null;     
    quantity?: number | null;  
    observations?: string | null; 
    discount?: number | null;  
    createdAt: Date;           
  }
  