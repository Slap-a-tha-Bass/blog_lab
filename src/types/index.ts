import { Request } from "express";

export interface newBlog {
    id: string,
    title: string,
    content: string,
    authorid?: string,
    _created?: Date
};

export interface mySQL_Response {
    affectedRows: number,
    insertId: number,
    sqlMessage: string
}
export interface BlogCardProps extends newBlog  {
    isPreview?: boolean
}
export interface Authors {
    id?: string,
    name?: string,
    password?: string,
    email?: string,
    _created?: Date
}
export interface Payload extends Authors {
    userid?: string,
    role?: number
}
export interface ReqUser extends Request {
    user?: Authors
}
export interface DonateProps {
    id: string,
    fullName: string,
    amount: Number
}
export interface ContactProps {
    from: string,
    subject: string,
    message: string
}