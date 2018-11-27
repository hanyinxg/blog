import query from "../utils/query";
class Reading {
    async getbook(){
        return await query(`SELECT * FROM RD_LIST`)
    }
    async addconfirm({name,author,score}){
        return await query(`INSERT INTO RD_LIST SET name='${name}',author='${author}',score='${score}'`)
    }
    async deletebook(id){
        return await query(`DELETE FROM RD_LIST WHERE id='${id}'`)
    }
    async changebook(id,{name,author,score}){
        return await query(`UPDATE RD_LIST SET name='${name}',author='${author}',score='${score}' WHERE id='${id}' `)
    }
    async getabout(){
        return await query(`SELECT * FROM ABOUT`)
    }
    async addabout(id,content){
        return await query(`UPDATE ABOUT SET content='${content}' WHERE id='${id}'`)
    }

}
export default new Reading()