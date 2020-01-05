<template>
	<div class="options">
         <ul>
         	<li>Android</li>
         	<li>Html5</li>
         	<li>photoshop</li>
         	<li>Node.js</li>
         </ul>
         <ul>
         	<li>MongoDB</li>
         	<li>Maya</li>
         	<li>premiere</li>
         	<li>更多</li>
         </ul>
	</div>
</template>
<style scoped>
	.options{
		width: 375px;/*no*/
		height: 80px;/*no*/
	}
	.options ul{
		width: 375px;/*no*/
		height: 30px;/*no*/
		line-height: 30px;/*no*/
		display: flex;
		flex:1;
		list-style: none;
		justify-content: space-around;
		margin-top: 10px;/*no*/
	}
	.options ul li{
		font-size: 14px;/*no*/
		width: 80px;/*no*/
		border: solid #D3D3D3 1px;/*no*/
		border-radius: 15px;/*no*/
		color: #808080;
		box-shadow: 0 0  0 1px  rgba(211,211,211,.3);/*no*/
		
	}
</style>

<script>
	export default{
		data(){
			return{}
		},
		mounted(){
		},
		methods:{},
		computed:{},
		components:{}
	}
</script>
