import axios from "axios"
import { UserType } from "./types/user.type"
import { BASE_URL } from "../api"

const url = `${BASE_URL}/api/User`

export const getUserByRegistrationNumberAsync = (registrationNumber: string) => {
    return axios.get<UserType>(`${url}/DocumentNumber/${registrationNumber}`)
}