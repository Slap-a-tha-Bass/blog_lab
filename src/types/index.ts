export interface newBlog {
    id: string,
    title: string,
    content: string,
    authorid?: string,
    _created?: Date,
    isPreview?: boolean
};

export interface mySQL_Response {
    affectedRows: number,
    insertId: number,
    sqlMessage: string
}