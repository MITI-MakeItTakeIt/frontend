import { LoginField, RegisterField } from "../interface/auth"
import axiosUrl from "../utils/axios"

export const userSignupPost = async (data: RegisterField) => {

    const response = await axiosUrl.post('/users/', data)
    console.log(response);

    return response

}

export const userLoginPost = async (data: LoginField) => {
    const response = await axiosUrl.post('/users/login/', data)
    if (response.status === 400) {
        alert('이메일/비밀번호 정보를 확인해주세요.')
    } else if (response.status === 401) {
        alert("일치하는 사용자가 없습니다. ")
    } else if (response.status === 200) {
        localStorage.setItem('access_token', response.data.data.token.access)
        console.log('access token saved');
        return response
    }

}