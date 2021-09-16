import { Query } from "../index";
import { Authors, mySQL_Response } from "../../../types";

const get_authors = () => Query<Authors[]>('SELECT * from Authors');

const find = (column: string, value: string) => Query<Authors[]>('SELECT * FROM Users WHERE ?? = ?', [column, value]);
const insert = ( email: string, password: string ) => Query<mySQL_Response>('INSERT INTO Users Set ?', [email, password]);

export default {
    get_authors,
    find,
    insert
}