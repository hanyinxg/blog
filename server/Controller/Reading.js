import reading from '../models/Reading'
class Reading {
    async getbook(ctx){
        ctx.body = await reading.getbook()
    }
    async addconfirm(ctx){
        const book = ctx.request.body
        ctx.body = await reading.addconfirm(book)
    }
    async deletebook(ctx){
        const id = ctx.params.id
        ctx.body = await reading.deletebook(id)
    }
    async changebook(ctx){
        const id = ctx.params.id
        const book = ctx.request.body
        ctx.body = await reading.changebook(id,book)
    }
    async getabout(ctx){
        ctx.body = await reading.getabout()
    }
    async addabout(ctx){
        const id = ctx.params.id
        const content = ctx.request.body.content
        ctx.body = await reading.addabout(id,content)
    }
}
export default new Reading()