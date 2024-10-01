import axios from "axios"
import { User } from "./user.type"
import { BASE_URL } from "../api"

const url = `${BASE_URL}/api/User`

export const getUserByRegistrationNumberAsync = (registrationNumber: string) => {
    return axios.get<User>(`${url}/DocumentNumber/${registrationNumber}`)
}