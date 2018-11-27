<template>
  <div>
    <header-nav></header-nav>
    <div class="kong"></div>
    <nav>
      <div class="title">
        <div>ASHEN ONE</div>
        <ul class="tab">
          <li><router-link to="/"><a href="">文章</a></router-link></li>
          <li><router-link to="/pigeonhole"><a href="">归档</a></router-link></li>
          <li><router-link to="/tag"><a href="">标签</a></router-link></li>
          <li><router-link to="/read"><a href="">阅读列表</a></router-link></li>
          <li><router-link to="/about"><a href="">关于我</a></router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  import HeaderNav from '../components/common/HeaderNav'
  export default {
    name: "about",
    components:{
      HeaderNav
    },
  }
</script>

<style scoped>
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
  .title li:nth-child(5) a{
    color: #ffffff;
  }
  .kong{
    width: 100%;
    height: 100px;
  }
</style>
