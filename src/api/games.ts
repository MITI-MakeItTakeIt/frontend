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
    // console.log(response.data)
    return response.data
}

export const getFindGameByTime = async (value: string) => {
    const response = await axiosUrl.get(`/games/?time=${value}`)
    // console.log(response.data)
    return response.data
}

export const getFindAllGames = async (value: string) => {
    const response = await axiosUrl.get(`/game/?range=${value}`)
    // console.log(response.data)
    return response.data
}