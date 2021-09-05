import { Query } from "../index";
import { Authors } from "../../../types";

const get_authors = () => Query<Authors[]>('SELECT * from Authors');

export default {
    get_authors
}