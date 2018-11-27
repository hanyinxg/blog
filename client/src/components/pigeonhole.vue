<template>
    <div class="pigeonhole">
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
          <div class="pige_content">
            <h1>文章归档</h1>
            <section v-for="year in years">
              <h4>{{ year }}</h4>
              <ul class="ul" v-for="intro in essays[year]">
                <li>
                  <i></i>
                  <router-link class="link" :to="'/detail/' + intro.id">{{ intro.title }}</router-link>
                  <span class="time"> {{ intro.createTime }}</span>
                </li>
              </ul>
            </section>

          </div>
        </div>
    </div>
</template>

<script>
  import HeaderNav from '../components/common/HeaderNav'
  import request from '@/../utils/request'
  import moment from 'moment'
    export default {
      name: "pigeonhole",
      data(){
        return{
          essays:{},
          years:[]
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
              const introYear = moment(article.createTime).year()
              if(this.years.indexOf(introYear) === -1){
                this.years.push(introYear)
                this.essays[introYear] = []
              }
              article.createTime = moment(article.createTime).format('MM-DD')
              this.essays[introYear].push(article)
            }
          }).catch(err=>{
            console.log(err)
          })
        }
      }
    }
</script>

<style scoped>
  .pigeonhole{
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
  .title li:nth-child(2) a{
    color: #ffffff;
  }
  .kong{
    width: 100%;
    height: 100px;
  }
  .pige_content{
    width: 60%;
    padding:0 20px;
    margin: 0 auto;
    border-bottom: 1px solid #cccccc;
  }
  .link{
    text-decoration: none;
    color: #ffffff;
  }
  .ul{
    padding-left:20px ;
    font-size: 18px;
  }
  i{
    display: inline-block;
    width: 8px;
    height: 8px;
    border:1px solid #cccccc;
    border-radius: 50%;
    margin-right: 10px;
  }
  .ul li span{
    padding-left: 10px;
    font-size: 16px;
    color: #aaaaaa;
  }

</style>
