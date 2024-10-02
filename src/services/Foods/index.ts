import axios from "axios"
import { BASE_URL } from "../api"
import { ListPaginatation } from "../@types/generic";
import { Food } from "./Foods.type";

const url = `${BASE_URL}/Food`

export const getListFoodAsync = async () =>  await axios.get<ListPaginatation<Food>>(`${url}`);