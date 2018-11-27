<template>
  <div class="read">
    <div class="bj">
      <header-nav></header-nav>
      <div class="kong"></div>
      <nav>
        <div class="title">
          <div>ASHEN ONE</div>
          <ul class="tab">
            <li><router-link to="/article"><a href="">文章</a></router-link></li>
            <li><router-link to="/pigeonhole"><a href="">归档</a></router-link></li>
            <li><router-link to="/tag"><a href="">标签</a></router-link></li>
            <li><router-link to="/read"><a href="">阅读列表</a></router-link></li>
            <!--<li><router-link to="/about"><a href="">关于我</a></router-link></li>-->
          </ul>
        </div>
      </nav>
      <table>
        <tr>
          <th>书名</th>
          <th>作者</th>
          <th>评分</th>
        </tr>
        <tr v-for="book in books">
          <td>{{book.name}}</td>
          <td>{{book.author}}</td>
          <td><star :score="book.score"></star></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import HeaderNav from '../components/common/HeaderNav'
  import Star from '../components/common/Star'
  import request from '@/../utils/request'
  export default {
    name: "read",
    components:{
      HeaderNav,
      Star
    },
    mounted:function(){
      this.getusers()
    },
    data(){
      return{
        // score:0,
        books:'',
      }
    },
    methods:{
      getusers:function(){
        request({
          url:'/getbook',
          method:'get'
        }).then(({data})=>{
          this.books = data
        }).catch(err=>{
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>
  .read{
    width: 100%;
    height: 1000px;
    background: url("../assets/image/1.jpg");
  }
  .bj{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, .6);
  }
  .title{
    margin: 30px auto;
    width: 60%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title div{
    font-size: 32px;
    color: #0AAC8E;
  }
  .title div:hover{
    color: goldenrod;
    transition: all .4s;
  }
  .title .tab{
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }
  .title a{
    color: rgba(255,255,255, .6);
    font-weight: bold;
    text-decoration: none;
    transition: all 0.4s;
  }
  .title a:hover{
    color: #ffffff;
  }
  .title li:nth-child(4) a{
    color: #ffffff;
  }
  .kong{
    width: 100%;
    height: 100px;
  }
  table{
    width: 60%;
    margin: 0 auto;
    text-align: center;
    font-size: 24px;
    margin-top: 50px;
    border-collapse: collapse;
  }
  table tr{
    border-bottom: 1px solid #cccccc;
    /*padding: 30px 0;*/
  }
  table tr td,table th{
    width: calc(100%/3);
    padding: 10px 0;

  }

</style>
