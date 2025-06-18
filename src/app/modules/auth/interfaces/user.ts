export interface User {
}

export interface UserLogin {
    account: string;
    password: string;
    capcha: string
}

export interface LoginResponse {
    accessToken: string;
    refeshToken: User;
}


