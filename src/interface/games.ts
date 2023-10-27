export interface OperateGame {
    startdate: string;
    starttime: string;
    enddate: string;
    endtime: string;
    min_invitation: number;
    max_invitation: number;
    address: string;
    address_detail: string;
    fee: number;
    info: string
}

export interface GameInfo extends OperateGame {
    id: number;
    game_status: string;
    created_at: string;
    modified_at: string;
    host?: number;
    participants?: [];
}