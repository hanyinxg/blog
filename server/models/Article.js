import query from "../utils/query";

class Article{
    async create(){
       return await query(`SELECT * FROM ARTICLE WHERE isPublished=1`)
    }
    async detail(id){
        return await query(`SELECT * FROM ARTICLE WHERE id=${id}`)
    }
}
export default new Article()