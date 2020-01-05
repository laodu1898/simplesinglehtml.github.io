<template>
	<div>
		<div class="status">
			<div class="list">
				<span class="font">全部</span><img src="../assets/arrow.png"><span class="icon">|</span>
			</div>
			<div class="list">
				<span class="font">最新</span><img src="../assets/arrow.png"><span class="icon">|</span>
			</div>
			
			<div class="right">
				<span class="right-font">仅显示未学</span><img src="../assets/buttom.png" class="one"><img src="../assets/slide.png" class="two">
			</div>
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
	*{
		margin: 0;
		padding: 0;
	}
	.status{
		width: 375px;/*no*/
		height: 36px;/*no*/	
		line-height: 36px;/*no*/	
		border-top: solid #D3D3D3 1px;/*no*/
		border-bottom: solid #D3D3D3 1px;/*no*/
		box-shadow: 0 2px  1px 0  rgba(211,211,211,.3);/*no*/
	}
	.status div{
		float: left;
		font-size: 12px;/*no*/
		color:#71777D; 
		position: relative;
	}
	.list{
		width: 90px;/*no*/
	}
    .list .font{
    	left: 26px;/*no*/
    	margin-right: 4px;/*no*/
    }
    .list  img{
    	width: 10px;/*no*/
    	height: 10px;/*no*/
    	
    }
    .list .icon{
    	position: absolute;
    	right: 0;
    	
    }
    .right {
    	width: 195px;/*no*/
    }
	.right .right-font{
		left: 83px;/*no*/
	}
	.right .one{
		width: 24px;/*no*/
		height: 8px;/*no*/
		position: absolute;
		left: 151px;/*no*/
		top: 14px;/*no*/
	}
	.right .two{
		width: 12px;/*no*/
		height: 12px;/*no*/
		position: absolute;
		left: 151px;/*no*/
		top: 12px;/*no*/
	}
</style>
