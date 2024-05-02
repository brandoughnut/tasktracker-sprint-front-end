export interface IMember {
    name: string
    color: string
}

export interface IBoard {
    name: string
    code: string
    members: IMember[]
}

export interface IUserInfo{
    username: string
    password: string
}

export interface IToken {
    token: string
}

export interface IUserData {
    userID: number;
    username: string;
    joinDate: string;
    userColor: string;
    boards: {
        name: string;
        code: string;
        members: {
            name: string;
            color: string;
        }[];
    }[];
}