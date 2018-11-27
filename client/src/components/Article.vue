<template>
    <div class="Article">
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

        <div class="matter">
          <div class="matter-ul">
            <ul v-for="{id,title,createTime,content} in essays">
              <li>{{title}}</li>
              <div class="line"></div>
              <li>{{createTime}}</li>
              <li><router-link class="link" :to="'/detail/' + id">...continue reading</router-link></li>
            </ul>
          </div>
        </div>
        </div>
      <!--{{content}}-->
  </div>

</template>

<script>

  import HeaderNav from './common/HeaderNav'
  import request from '@/../utils/request'
  import moment from 'moment'
  import { mapState,mapMutations } from 'vuex'
    export default {
      name: "Article",
      mounted:function(){
        this.getusers();
      },
      data(){
        return{
          essays:[],
          total:0
        }
      },
      computed:{
        // ...mapState('content'),
      },
      components:{
        HeaderNav
      },
      methods:{
        getusers:function(page){
          request.get('/create',{
            params:{
              page:page || 1,
              pageSize:2
            }
          }).then(({data})=>{
            for(let article of data){
              article.createTime = moment(article.createTime).format('YYYY年-MM月-DD日 HH:mm:ss')
              article.isChosen = true
            }
            this.essays = data
            this.total = data.count;
          }).catch(err=>{
            console.log(err)
          })
        },
        pageChange:function(value){
          this.getusers(value);
        },
      }
    }


</script>

<style scoped>
.Article{
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
.title li:nth-child(1) a{
  color: #ffffff;
}

.kong{
  width: 100%;
  height: 100px;
}
.matter{
  margin: 90px auto;
  width: 30%;
  height: 450px;
  text-align: center;
  overflow: auto;
  scrollbar-track-color: #55a532;
  position: relative;
}
.matter-ul{
  position: absolute;
  left: 0;
}
.matter::-webkit-scrollbar {
  width: 4px;
  height: 30px;
}
.matter::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px #cccccc;
  background: #cccccc;
}
.matter::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.6);
  border-radius: 0;
  background: rgba(0,0,0,0.6);
}

.matter ul{
  margin-bottom: 90px;
  margin-top: 0;
}
.matter ul:last-child{
  margin-bottom: 0;
}
.matter ul li:nth-of-type(1){
  font-size: 44px;
  color: #fff;
  font-weight: bold;
}
.matter ul li:nth-of-type(2){
  font-size: 14px;
  color: rgba(255,255,255, 0.6);
  font-weight: bold;
  margin-bottom: 30px;
}
.matter ul li:nth-of-type(3) .link{
  background: #0AAC8E;
  width: 150px;
  margin: 0 auto;
  padding: 10px 5px;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
}
/*.matter ul .link{*/
  /*color: #000;*/
/*}*/
.line{
  margin: 20px auto;
  width: 50px;
  border-top: 4px solid #0AAC8E;
}
</style>
