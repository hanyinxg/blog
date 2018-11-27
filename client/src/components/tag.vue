<template>
  <div class="tag">
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
      <div class="tag_content">
        <h1>标签</h1>
        <h4 v-for="essay in essays">
          <router-link class="link" :to="'/detail/' + essay.id">{{essay.tags}}</router-link>
        </h4>
        <div v-for="essay in essays">
          {{essay.tags}}
          <router-link class="link" :to="'/detail/' + essay.id"><p><i></i>{{essay.title}}<time>{{essay.createTime}}</time></p></router-link>
        </div>


      </div>
    </div>

  </div>
</template>

<script>
  import HeaderNav from '../components/common/HeaderNav'
  import moment from 'moment'
  import request from '@/../utils/request'
  export default {
    name: "tag",
    data(){
      return{
        essays:''
      }
    },
    components:{
      HeaderNav
    },
    mounted:function(){
      this.getusers();
    },
    methods:{
      getusers:function(){
        request({
          url:'/create',
          method:'get'
        }).then(({data})=>{
          for(let article of data){
            article.createTime = moment(article.createTime).format('MM-DD')
          }
          this.essays = data
          console.log(this.essays)
        }).catch(err=>{
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>
  .bj{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, .6);
  }
  .tag{
    width: 100%;
    height: 1000px;
    background: url("../assets/image/1.jpg");
  }
  .title{
    margin: 30px auto;
    margin-bottom: 20px;
    width: 60%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #ffffff;
    padding: 0 20px;
    padding-bottom: 10px;
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
  .title li:nth-child(3) a{
    color: #ffffff;
  }
  .kong{
    width: 100%;
    height: 100px;
  }
  .tag_content{
    width: 60%;
    padding:0 20px;
    margin: 0 auto;
    border-bottom: 1px solid #cccccc;
  }
  .link{
    color: #ffffff;
    text-decoration: none;
  }
  h1{
    margin: 0;
  }
  .tag_content h4{
    display: inline-block;
    padding-right: 20px;
    color: #ffffff;
    font-weight: bold;
  }
  .tag_content div{
    font-weight: bold;
  }
  .tag_content p{
    padding-left: 20px;
    font-weight: normal;

  }
  .tag_content p i{
    display: inline-block;
    width: 8px;
    height: 8px;
    border:1px solid #cccccc;
    border-radius: 50%;
    margin-right: 10px;
  }
  .tag_content p time{
    padding-left: 10px;
    font-size: 16px;
    color: #aaaaaa;
  }
</style>
