import { Query } from "../index";
import { Authors, mySQL_Response } from "../../../types";

const get_authors = () => Query<Authors[]>('SELECT * from Authors');

const find = (column: string, value: string) => Query<Authors[]>('SELECT * FROM Users WHERE ?? = ?', [column, value]);
const insert = () => Query<mySQL_Response>('');

export default {
    get_authors,
    find,
    insert
}