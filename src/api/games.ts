import { OperateGame } from "../interface/games";
import axiosUrl from "../utils/axios";


export const postOperateGame = async (data: OperateGame) => {
    const response = await axiosUrl.post('/games/', data)
    // console.log(response.data)
    return response.data
}

export const getFindGame = async (gameId: number) => {
    const response = await axiosUrl.get(`/games/${gameId}`)
    // console.log(response.data)
    return response.data
}


export const getFindGameByDate = async (value: string) => {

    const response = await axiosUrl.get(`/games/?date=${value}`)
    return response

}

export const getFindGameByTime = async (value: string) => {
    const response = await axiosUrl.get(`/games/?time=${value}`)
    // console.log(response.data)
    return response
}

export const getFindAllGames = async () => {
    const response = await axiosUrl.get(`/game/future`)
    // console.log(response.data)
    return response.data
}