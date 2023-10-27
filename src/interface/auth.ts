export interface LoginField {
    email: string;
    password: string;

}

export interface RegisterField extends LoginField {
    password_check: string;
    nickname: string;
}

export interface KakaoLogin {
    login_url: string;
}