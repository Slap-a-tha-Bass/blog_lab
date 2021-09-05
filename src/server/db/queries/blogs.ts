import { Query } from "../index";
import { newBlog } from "../../../types";

const get_blogs = () => Query<newBlog[]>('SELECT * FROM Blogs ORDER BY _created ASC');
const get_one_blog = ( id: string ) =>Query<newBlog[]>('SELECT * FROM Blogs WHERE id=?', [id]);
const post_blog= (wholeBlog: newBlog) => Query('INSERT INTO Blogs SET ?', [wholeBlog]);
const update_blog= ( id: string, updatedBlog: newBlog) => Query('UPDATE Blogs SET ? WHERE id=?', [updatedBlog, id]);
const delete_blog= ( id: string) => Query('DELETE FROM Blogs WHERE id=?', [id]);

export default {
    get_blogs,
    get_one_blog,
    post_blog,
    update_blog,
    delete_blog
}