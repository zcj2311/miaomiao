<template>
  <div id="main">
    <Header title="我的喵喵"/>
    <div  id="content">
      <Login/>
    </div>
    <Tabbur/> 
  </div>
</template>

<script>
import Header from '@/components/Header/index';
import Tabbur from '@/components/Tabbur/index';
import Login from '@/components/Login/index';
export default {
  name:'Mine',
  components:{
    Header,
    Tabbur,
    Login
  },
}
</script>

<style>

</style>