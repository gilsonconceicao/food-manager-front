import axios from "axios"
import { BASE_URL } from "../api"

const url = `${BASE_URL}/Food`

export const getAllFoods = () => {
    return axios.get(`${url}`)
}