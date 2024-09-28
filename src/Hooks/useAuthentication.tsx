import { UserType } from "@/services/user/types/user.type";
import { useState } from "react";

export const useUserTasks = () => {
    const key = 'key-user';
    const getDataInLocal = typeof window !== "undefined" ? window.localStorage.getItem('access') : false;
    const personData = getDataInLocal ? JSON.parse(getDataInLocal) : null;
    // const getDataInLocal = JSON.parse(localStorage.getItem(key)??""); 
    const userIsLogged = Object.values(personData ?? {}).length > 0;
    const [isLogged, setIsLogged] = useState<boolean>(userIsLogged)

    const setUser = (user: {
        name: string, 
        registraionNumber: string
    }) => {
        localStorage.setItem(key, JSON.stringify(user));
        setIsLogged(true);
    }

    const logoutUser = () => {
        setIsLogged(false);
        localStorage.removeItem(key);
    }
    return {
        isLogged,
        setUser, 
        logoutUser, 
        personData
    }
}