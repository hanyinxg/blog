import Router from 'koa-router'
import UserController from '../Controller/UserController'
import {base_API} from "../config";
import checkToken from '../utils/checkToken'
import ArticleController from '../Controller/ArticleController'
import Article from '../Controller/Article'
import Reading from '../Controller/Reading'
const router = new Router()

router.get('/',async ctx=>{
    ctx.body = '欢迎使用vue-blog接口测试服务器！！！！！'
})
//所有的路由都写在这里就可以了
//前端所有的请求发送过来的时候都是http://localhost:3000/api/.....
router.prefix(`${base_API}`)
//登录
router.post('/login',UserController.login)
//退出
router.get('/logout',checkToken,UserController.logout)
//获取所有的文章
router.get('/articles',checkToken,ArticleController.getArticles)
//添加一篇新的文章
router.post('/articles/add',checkToken,ArticleController.addArticle)
//查询一下最新发布的那篇文章的详细信息
router.get('/articles/:id',checkToken,ArticleController.getOneArticle)
//更新一篇新的文章
router.post('/articles/update/:id',checkToken,ArticleController.updateArticle)
//删除一篇文章
router.delete('/articles/:id',checkToken,ArticleController.deleteArticle)
//发布文章
router.put('/articles/publish/:id',checkToken,ArticleController.publishArticle)
//查找文章
router.get('/create',Article.create)

router.get('/detail/:id',Article.detail)

router.get('/getbook',Reading.getbook)

router.post('/addconfirm',checkToken,Reading.addconfirm)

router.delete('/deletebook/:id',checkToken,Reading.deletebook)

router.post('/changebook/:id',checkToken,Reading.changebook)

router.get('/getabout',checkToken,Reading.getabout)
router.post('/addabout/:id',checkToken,Reading.addabout)
export default router
