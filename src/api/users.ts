import { LoginField, RegisterField } from "../interface/auth"
import axiosUrl from "../utils/axios"

export const userSignupPost = async (data: RegisterField) => {
    const response = await axiosUrl.post('/users/', data)
    console.log(response.data)
    return response
}

export const userLoginPost = async (data: LoginField) => {
    const response = await axiosUrl.post('/users/login/', data)
    console.log(response.data)
    if (response.data.data.token?.access) {
        localStorage.setItem('access_token', response.data.data.token.access)
        console.log('access token saved');
    }
    return response
}