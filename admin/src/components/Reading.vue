<template>
    <div style="height: 100%;">
      <head-nav></head-nav>
      <Aside></Aside>
      <main>
        <div class="title">
          <span>阅读列表 /</span><span> READING LIST</span>
        </div>
        <p class="add" @click="addbook">添加书籍</p>
        <table>
          <tr>
            <th>书名</th>
            <th>作者</th>
            <th>评分</th>
            <th>编辑/删除</th>
          </tr>
          <tr v-for="(book,index) in books">
            <td>{{book.name}}</td>
            <td>{{book.author}}</td>
            <td><star :score="book.score"></star></td>
            <td><span @click="compile(index)">编辑</span><span @click="deletebook(index)">删除</span></td>
          </tr>
        </table>
      </main>
      <div class="back" :class="{block:show}">
        <div class="alter">
          <p></p>
            <h5>输入书籍</h5>
            <star :score="score" id="score" @choose-star="chooseScore"></star>
            <input id="name" type="text" placeholder="请输入书籍名称..."><br>
            <input id="author" type="text" placeholder="请输入作者..."><br>
          <div>
            <span @click="confirm">确认</span>
            <span @click="show=false">取消</span>
          </div>

        </div>

      </div>
    </div>
</template>

<script>
  import HeadNav from '../components/common/HeadNav'
  import Aside from '../components/common/Aside'
  import request from '@/utils/request'
  import Star from '../components/common/Star'
    export default {
      name: "Reading",
      components:{
        HeadNav,
        Aside,
        Star
      },
      data(){
        return{
          books:'',
          show:false,
          score:0,
          judge:false,
          editingId:''

        }
      },
      mounted:function(){
        this.getusers()
      },
      methods:{
        getusers:function(){
          request({
            url:'/getbook',
            method:'get'
          }).then(res=>{
            this.books = res
          }).catch(err=>{
            console.log(err)
          })
        },
        addbook:function(){
          this.show = true
          this.score = 0
          this.judge = true
          document.querySelector('#author').value = ''
          document.querySelector('#name').value = ''
        },
        compile:function (id) {
          console.log(id)
          this.judge = false
          this.show = true
          this.score = this.books[id].score
          document.querySelector('#author').value =this.books[id].author
          document.querySelector('#name').value = this.books[id].name
          this.editingId = this.books[id].id

        },
        deletebook:function(index){
          request({
            url:`/deletebook/${this.books[index].id}`,
            method:'delete'
          }).then(res=>{
            this.books.splice(index, 1)
          }).catch(err=>{
            console.log(err)
          })

        },
        chooseScore:function({evt, width}) {
          const offsetX = evt.offsetX
          // toFixed返回的是字符串...
          let score = (parseInt(evt.target.dataset.index, 10) + parseFloat(offsetX / width)).toFixed(2)
          if (score > 4.9) {
            score = 5
          }
          this.score = score
        },
        confirm:function(){
          console.log(name)
          if (this.judge){
            const name = document.querySelector('#name').value
            const author = document.querySelector('#author').value
            console.log(name)
            const score = this.score
            if (name && author){
              request.post(
                '/addconfirm',
              {
                  name,
                  author,
                  score
              }).then(res=>{
                const id = res.insert
                const book = {
                  id,
                  name,
                  author,
                  score
                }
                this.books.push(book)
                this.show = false
              })
            }else{
              alert('信息输入不完整')
            }
          }else{
            const name = document.querySelector('#name').value
            const author = document.querySelector('#author').value
            const score = this.score
            const editingId  = this.editingId
            request.post(
              `/changebook/${editingId}`,
              {
                name,
                author,
                score,
                editingId
              }).then(res=>{
                this.show=false
                this.getusers()
            }).catch(err=>{
              console.log(err)
            })
          }
        }
      }
    }
</script>

<style scoped>
main{
  padding: 20px 48px;
  margin-left: 48px;
}
main .title{
  padding-bottom: 15px;
  border-bottom: 1px solid #aaa;
}
main .title span:first-child{
  font-size: 16px;
}
main .title span:last-child{
  font-size: 14px;
  color: #c1bfb5;
}
  main .add{
    width: 60px;
    text-align: center;
    color: #ffffff;
    background: #f18f01;
    border: 1px solid #f18f01;
    padding: 2px 0;
    border-radius: 3px;
    cursor: pointer;
  }
  main .add:hover{
    color: #f18f01;
    background: #ffffff;
  }
  table{
    text-align: center;
    font-size: 1.6rem;
    width: 100%;
    border-collapse: collapse;
  }

  table th{
    padding: 10px;
    border-bottom: 1px solid #34495e;
  }
table tr td{
  padding: 10px;
  font-size: 14px;
  border-bottom: 1px dotted #34495e;
  border-left:1px dotted #34495e ;
}
table tr td:first-child{
  border-left: 0;
}
table tr td span:first-child,.alter span:first-child{
  background:#f18f01;
  color: #ffffff;
  border: 1px solid #f18f01;
  padding:2px 4px;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 10px;
}
table tr td span:first-child:hover ,.alter span:first-child:hover{
  color: #f18f01;
  background: #ffffff;
}
table tr td span:last-child,.alter span:last-child{
  padding:2px 4px;
  border: 1px solid #34495e;
  color: #34495e;
  border-radius: 3px;
  background: #dddddd;
}
table tr td span:last-child:hover,.alter span:last-child:hover{
  color: #f18f01;
  border: 1px solid #f18f01;
  cursor: pointer;
}
  .back{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    text-align: center;
    transform: translateY(-100%);
    transition: all 0.5s;
  }
  .back .alter{
    width: 400px;
    height: 300px;
    background: white;
    border-radius: 5px;
  }
  .alter p{
    margin: 0;
    margin-bottom: 25px;
    width: 100%;
    height: 20px;
    background: #f18f01;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .alter input{
    width: 200px;
    height: 33px;
    margin-bottom: 15px;
  }
.alter div{
  width: 200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.block{
  transform: translateY(0);
}
.alter div button{
  background: #f18f01;
}
  h5{
    margin: 0;
  }
</style>
