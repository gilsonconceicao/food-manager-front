import { ModelBase } from "@/services/@types/generic";

export type User = {
    name: string;
    registrationNumber: string
    address: Address
} & ModelBase; 

export interface Address {
    id: string;                
    street: string;           
    city: string;              
    state: string;            
    zipCode: string;           
    number: number;            
    user?: User | null;   
    userId?: string | null;
  }