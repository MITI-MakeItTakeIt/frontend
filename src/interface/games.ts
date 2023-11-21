export interface OperateGame {
    startdate: string;
    starttime: string;
    enddate: string;
    endtime: string;
    min_invitation: number;
    max_invitation: number;
    address: string;
    address_detail: string;
    title: string;
    fee: number;
    info: string
}



export interface AllGamesData {
    id: number;
    startdate: string;
    starttime: string;
    enddate: string;
    endtime: string;
    min_invitation: number;
    max_invitation: number;
    fee: number;
    title: string;
    address: string;
    address_detail: string;
    info: string;
    game_status: string;
    created_at: string;
    modified_at: string;
    host: number;
    participations: [];
}

export interface GameData {
    id: number;
    start_datetime: string;
    end_datetime: string;
    min_invitation: number;
    max_invitation: number;
    fee: number;
    address: string;
    address_detail: string;
    info: string;
    game_status: string;
    created_at: string;
    modified_at: string;
    host: number;
}