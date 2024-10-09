import axios from "axios"
import { BASE_URL } from "../api"
import { ListPaginatation } from "../@types/generic";
import { Food, FoodCreateDTO } from "./Foods.type";

const url = `${BASE_URL}/Food`

export const getListFoodAsync = async () =>  await axios.get<ListPaginatation<Food>>(`${url}`);
export const createFoodAsync = async (values: FoodCreateDTO) => await axios.post(`${url}`, values);