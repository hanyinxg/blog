import Article from '../models/Article'
class article {
    async create(ctx){
        ctx.body = await Article.create()
    }
    async detail(ctx){
        let id = ctx.params.id
        ctx.body = await Article.detail(id)
    }
}
export default new article()