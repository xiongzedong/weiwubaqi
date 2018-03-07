<template>
	<div>
		<div id='header-daoh'>
	    <yd-navbar title="武汉大学中南医院">
	        <router-link to="#" slot="left">
	            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
	        </router-link>
	        
	        <router-link to="#" slot="right">
	            <yd-navbar-next-icon></yd-navbar-next-icon>
	        </router-link>
	    </yd-navbar>
		</div>	
	
  <div id="shouyes">
		<Banner swiperid='go' >
      <div slot='swiper-con' class="swiper-slide " >
       <img src="../assets/timg.jpg"/>
      </div>
      <div slot='swiper-con' class="swiper-slide ">
      <img src="../assets/timig1.jpg"/>
      </div>
      <div slot='swiper-con' class="swiper-slide ">
        <img src="../assets/1.png"/>
      </div>
    </Banner>
		<New></New>
  </div>
</div>
 
</template>

<script>

import New from '@/components/new'
import Banner from '@/components/banner'

export default {
  name: 'shouyes',
  components:{
  	New,
  	Banner
  }
}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
#shouyes {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
	
}
#shouyes img{
	width: 100%;
	height: 150px;
}
 body{
  	background-color: white;
  	
  }
</style>
