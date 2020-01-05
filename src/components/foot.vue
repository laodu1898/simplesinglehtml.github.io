<template>
	<div class="foot">
		
			<div>
				<img src="../assets/web.png">
				<span>首页</span>
			</div>
			<div>
				<img src="../assets/sea.png">
				<span>发现</span>
			</div>
			<div>
				<img src="../assets/download.png">
				<span>下载</span>
			</div>
			<div>
				<img src="../assets/me.png">
				<span>我的</span>
			</div>
		
	</div>
</template>
<script>
	export default{
		data(){
			return{}
		},
		mounted(){}
	}
</script>

<style scoped>
	.foot{
		position: fixed;
		bottom: 0;/*no*/
		width: 375px;/*no*/
		height:50px;/*no*/
		z-index: 3;
		background: #fff;
		display: flex;
		justify-content: space-around;
    }
    .foot div{
    	font-size: 10px;/*no*/
    	height: 50px;/*no*/
    	display: flex;
    	flex:1;
    	flex-direction: column;
    	justify-content: center;
    	align-items: center;

    }
    .foot div img{
    	width: 24px;/*no*/
    }
</style>