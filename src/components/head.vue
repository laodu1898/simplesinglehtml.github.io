<template>
	<div>
		<div class="head">
			<div class="icon-back"><img src="../assets/back.png"></div>
			<div class="title">前端开发</div>
			<div class="icon-search"><img src="../assets/search.png"></div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{}
		},
		mounted(){},
		methods:{},
		computed:{},
		components:{}
	}
</script>

<style scoped>
	.head{
		z-index: 3;
		width: 375px;/*no*/
		height: 44px;/*no*/
		line-height: 44px;/*no*/
		position: fixed;
		top: 0;/*no*/
		margin-bottom: 44px;/*no*/
		background: white;
	}
	.head div{
		float: left;
	}
	.head .icon-back {
		height: 14px;/*no*/
		width: 14px;/*no*/
        margin-left: 20px;/*no*/
    }
    .head .icon-back img{
    	height: 14px;/*no*/
		width: 14px;/*no*/
    }
    .head .title{
    	margin-left: 16px;/*no*/
    	width: 64px;/*no*/
    	height: 24px;/*no*/
    	font-size: 16px;/*no*/
    }
    .head .icon-search{
        margin-left: 223px;/*no*/
        width: 18px;/*no*/
    	height: 18px;/*no*/
    }
    .head .icon-search img{
    	width: 18px;/*no*/
    	height: 18px;/*no*/
    }
</style>