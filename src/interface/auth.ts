export interface LoginField {
    email: string;
    password: string;
    token?: string,
    access_token?: string,
    refresh_token?: string

}

export interface RegisterField {
    email: string;
    password: string;
    password_check: string;
    nickname: string;
}

export interface KakaoLogin {
    login_url: string;
}