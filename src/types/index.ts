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
    id: string,
    name: string,
    email: string
}
export interface DonateProps {
    id: string,
    fullName: string,
    amount: Number
}