import { OperateGame } from "../interface/games";
import axiosUrl from "../utils/axios";


export const postOperateGame = async (data: OperateGame) => {
    const response = await axiosUrl.post('/games/', data)
    console.log(response.data)
    return response.data
}
export const getFindAllGames = async () => {
    const response = await axiosUrl.get('/games/',
        // {
        //     headers: { Authorization: getAuthorizationHeader() }
        // }
    )
    console.log(response.data)
    return response.data
}

export const getFindGame = async (gameId: number) => {
    const response = await axiosUrl.get(`/games/${gameId}`,
        // {
        //     headers: { Authorization: getAuthorizationHeader() }
        // }
    )
    console.log(response.data)
    return response.data
}