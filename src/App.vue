<template>
  <div id="app">
    
   <!-- <transition name="drop"><!--路由过渡动画	-->
    	<router-view></router-view>
    <!--</transition>-->
    <Tabbar></Tabbar>
  </div>

 
</template>

<script>
	import Tabbar from '@/components/tabbar'
	import New from '@/components/new'
	export default {
		name: 'app',
		components:{
			Tabbar,
		},
		created(){
			this.$router.push('/shouye')//路由重定向到首页
		}
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
/*	margin-top: 60px;*/
}

/*左右滑动*/
 /*.drop-enter-active{
    transition:all .5s ease;
  }
  .drop-leave-active{
    transition:all .2s ease;
  }
  .drop-enter{
    transform: translateX(-500px);
  }
  .drop-leave-active{
    transform:translateX(500px)
  }*/
 /*淡入淡出*/
 /*.drop-enter{
 	opacity: 0;
 }
 .drop-enter-active{
 	transition: opacity 2s;
 }
 .drop-leave{
 	opacity: 1;
 }
 .drop-leave-active{
 	opacity: 0;
 	transition:opacity 2s;
 }*/

</style>
