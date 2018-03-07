<template>
	<div id="qq">
		<ul>
			
				<router-link v-for="item in tst" tag='li' :to="{path:item.path}">
					<img :src="item.img1"/><br />
					<span>{{item.apa}}</span>
				</router-link>
			
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tst:[
				{
					img1:require('../assets/p1.png'),
					apa:'预约挂号',
					path:'./fenye/yiyuan'
				},
				{
					img1:require('../assets/p1.png'),
					apa:'当天挂号',
					path:'./fenye/keshi'
				},
				{
					img1:require('../assets/p3.png'),
					apa:'扫码支付',
					path:'./fenye/zhuanjia'
				},
				{
					img1:require('../assets/p4.png'),
					apa:'门诊缴费',
					path:'./fenye/jiuzhen'
				},
				{
					img1:require('../assets/p5.png'),
					apa:'门诊查询',
					path:'./fenye/yuyue'
				},
				{
					img1:require('../assets/p6.png'),
					apa:'一日清单查询',
					path:'./fenye/zhineng'
				},
				{
					img1:require('../assets/p7.png'),
					apa:'检查报告单',
					path:'./fenye/yiliao'
				},
				{
					img1:require('../assets/p8.png'),
					apa:'检验报告单',
					path:'./fenye/jianyan'
				},
				{
					img1:require('../assets/p9.png'),
					apa:'体检报告单',
					path:'./fenye/paidui'
				},
				{
					img1:require('../assets/p10.png'),
					apa:'问卷调查',
					path:'./fenye/dianzi'
				},
				{
					img1:require('../assets/p11.png'),
					apa:'个人中心',
					path:'./fenye/geren'
				},
				]
			}
		}
	}
</script>

<style scoped>
	#qq ul{
		width: 100%;
		list-style: none;
		margin: 0 auto;
	}
	#qq ul li{
		float: left;
		width: 33%;
		margin-top: 5%;
	
	}
	 #qq ul li img{
		width: 50px;
		
	}
	#qq span{
		font-size: 12px;
	}

</style>