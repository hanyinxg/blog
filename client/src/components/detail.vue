<template>
<div class="detail">
  <div class="bg">
    <p class="title"><span>Content</span> <a href="/">>by article</a></p>
    <div>
      <h1>{{tags}}</h1>
      <p>{{content}}</p>
      <button @click="back">BACK></button>
    </div>

  </div>
</div>
</template>

<script>
  import request from '@/../utils/request'
    export default {
      name: "detail",
      mounted:function(){
        this.haha();
      },
      data(){
          return{
            essay:'',
            tags:'',
            content:''
          }
      },
      methods:{
          haha(){
            let id = this.$route.params.id
           request({
             url:`/detail/${id}`,
             method:'get'
           }).then(({data})=>{
             this.essay = data
             this.tags = this.essay[0].tags
             this.content = this.essay[0].content
           }).catch(err=>{
             console.log(err)
             })
          },
        back(){
            this.$router.go(-1)
        }
        // ...mapMutations(['SET_CONTENT'])
      }
    }
</script>
<style scoped>
  h1{
    margin: 0;
    font-size: 42px;
  }
.detail{
  color: #ffffff;
  width: 100%;
  height: 1000px;
  background: url("../assets/image/2.jpg") no-repeat;
  background-size: 100% 100%;
}
.detail .bg{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0, 0.4);
}
  .bg div{
    position: relative;
    text-align: left;
    width: 650px;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%,50%);
  }
  .bg div p{
    font-size: 24px;
  }

  .title{
    padding: 20px;
    font-size: 24px;
    margin: 0;
    margin-left: 20px;
  }
  .title a{
    text-decoration: none;
    color: #cccccc;
    font-size: 18px;
  }
  .bg div button{
    color: #ffffff;
    background: #000000;
    border: 2px solid #ffffff;
    padding: 8px 10px;
    font-weight: bold;
    font-size: 18px;
    position: absolute;
    right: 0;
    margin-top: 20px;
  }
  .bg div button:hover{
    border: 2px solid transparent;
    background: white;
    color: #000;

  }
</style>
