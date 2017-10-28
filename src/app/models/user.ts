export interface IUser{
    _id: string,
    date: Date,
    name: string,
    email: string,
    role: string
}

export interface IUserCreate{
    name: string,
    email: string,
    role: string,
    password: string
}

export interface IUserUpdate{
    _id: string,
    name: string,
    email: string,
    role: string,
    password: string
}