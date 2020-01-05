<template>
	<div class="course">
		<ul class="list">
			<li v-for="item in arrlist">
				<img :src="item.imgurl">
				<h1>{{item.title}}</h1>
				<p>{{item.msg}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
    
	export default{
		data(){
			return{

			}
		},
		mounted(){
			
		},
		methods:{},
		computed:{},
		components:{},
		props:{
			arrlist:{
				type:Array
			}
		
		}
	}
</script>
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.course{
		width: 375px;/*no*/
		padding-top: 20px;/*no*/
	}
	.course .list li{
		width: 375px;/*no*/
		height: 72px;/*no*/
		margin-bottom: 24px;/*no*/
		text-align: left;
 
	}
	.course .list li img{
		width: 108px;/*no*/
		height: 72px;/*no*/
		float: left;
		margin-left: 20px;/*no*/
		margin-right: 16px;/*no*/
	}
	.course .list li h1{
		font-size: 15px;/*no*/

        color: #2B333B;
        display: block;
	}
	.course .list li p{
		font-size: 12px;/*no*/
        color: #71777D;
	}
</style>