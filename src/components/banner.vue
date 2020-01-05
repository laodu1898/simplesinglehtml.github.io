<template>
	<div class="banner">
		<div class="imgurl">
			<img src="../assets/banner.jpg">
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
			}
		},
		mounted(){},	
	}
</script>
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.banner{
		width: 375px;/*no*/
	}
	.banner .imgurl{
		width: 100%;/*no*/
		height: 120px;/*no*/
	}
	.banner .imgurl img{
		width: 375px;/*no*/
	}
</style>