<template>
<div class="header">
  <nav class="black">
    <p class="title"><span>Back</span> <a href="/">>homepage</a></p>
  </nav>
</div>
</template>

<script>
    export default {
        name: "HeaderNav",
    }
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.header{
  width: 100%;
  position:fixed;
  top: 0;
}
.black{
  width: 100%;
  height: 90px;
  background: #000000;
  position: relative;
}
.title{
  position: absolute;
  bottom: 0;
  padding: 20px;
  font-size: 24px;
  margin: 0;
  margin-left: 20px;
  color: #ffffff;
}
.title a{
  text-decoration: none;
  color: #cccccc;
  font-size: 18px;
}
</style>
