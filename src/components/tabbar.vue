<template>
	<div class="tabbarWrap">
			<router-link to='../shouye'>
				<item txt='首页' mark='1' :sel='selected' @change='getVal'>
					<img src="../assets/shouye.png" slot='aimg'/>
					<img src="../assets/shouye2.png" slot='bimg'/>
				</item>
			</router-link>
			
			<router-link to='../weitao'>
				<item txt='微淘' mark='2' :sel='selected' @change='getVal'>
					<img src="../assets/shouye.png" slot='aimg'/>
					<img src="../assets/shouye2.png" slot='bimg'/>
				</item>
			</router-link>
			
			<router-link to='../faxian'>
				<item txt='发现' mark='3' :sel='selected' @change='getVal'>
					<img src="../assets/shouye.png" slot='aimg'/>
					<img src="../assets/shouye2.png" slot='bimg'/>
				</item>
			</router-link>
			
			<router-link to='../gouwuche'>
				<item txt='购物车' mark='4' :sel='selected' @change='getVal'>
					<img src="../assets/shouye.png" slot='aimg'/>
					<img src="../assets/shouye2.png" slot='bimg'/>
				</item>
			</router-link>
			
			<router-link to='../shangcheng'>
				<item txt='我的商城' mark='5' :sel='selected' @change='getVal'>
					<img src="../assets/shouye.png" slot='aimg'/>
					<img src="../assets/shouye2.png" slot='bimg'/>
				</item>
			</router-link>
	</div>
</template>

<script>
	import Item from './item'//引用组件
	export default{
		components:{
			Item
		},
		data:function(){
			return{
				selected:1
			}
		},
		methods:{
			getVal:function(val){
				this.selected = val;
			}
		}
	}
</script>

<style>
	.tabbarWrap{
		width: 100%;
		height: 45px;
		position: fixed;
		left: 0;
		bottom: 0;
		border-top: 1px solid #CCCCCC;
	}
	.tabbarWrap img{
		width:25px;
	}
	
</style>