import { OperateGame } from "../interface/games";
import axiosUrl from "../utils/axios";


export const postOperateGame = async (data: OperateGame) => {
    const response = await axiosUrl.post('/games/', data)
    console.log(response.data)
    return response
}
export const getFindAllGames = async () => {
    const response = await axiosUrl.get('/games/')
    console.log(response.data)
    return response
}

export const getFindGame = async (gameId: number) => {
    const response = await axiosUrl.get(`/games/${gameId}`)
    console.log(response.data)
    return response
}