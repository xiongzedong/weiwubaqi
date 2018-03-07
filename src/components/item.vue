<template>
	<div class="itemWrap" @click="fn">
		<span v-show='bol'><slot name='aimg'></slot><br /></span>
		<span v-show='!bol'><slot name='bimg'></slot><br /></span>
		<span :class='{active: !bol}'>{{ txt }}</span>
	</div>
</template>

<script>
	export default{
		props:['txt','mark','sel'],
		//计算属性，定义需要通过简单逻辑判断后，才能最终确定值的变量
		computed:{
			bol:function(){
				if(this.mark == this.sel){
					return false;
				}
				return true;
			}
			
		},
		methods:{
			fn:function(){
				//将当前被点击的item的mark值，传递给父级，赋给selected
				this.$emit('change',this.mark);
				
			}
		}
	}
</script>

<style scoped>
	.itemWrap{
		width: 20%;
		float: left;
		text-align: center;
	}
	.itemWrap img{
		width: 25px;
		margin-top:2px;	
	}
	.itemWrap span{
		font-size: 12px;
		color: #999;
	}
	.itemWrap .active{
		color: red;
	}
</style>