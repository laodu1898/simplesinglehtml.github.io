<template>
	<div>
		
		<v-head></v-head>
		<v-banner class="banner"></v-banner>
		<v-options></v-options>
		<v-status></v-status>
		<v-course :arrlist="list" class="mgb"></v-course>
		<v-foot></v-foot>
	</div>
</template>

<script>

	import head from '@/components/head.vue'
	import foot from '@/components/foot.vue'
	import banner from '@/components/banner.vue'
	import options from '@/components/options.vue'
	import status from '@/components/status.vue'
	import course from '@/components/course.vue'
	import course1 from '@/assets/course1.jpg'
	import course2 from '@/assets/course2.jpg'
	import course3 from '@/assets/course3.jpg'
	import course4 from '@/assets/course4.jpg'
	import course5 from '@/assets/course5.jpg'
	export default{
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			this.list=[{
				imgurl:course1,
				title:'实例妙解Sed和Awk的秘密',
				msg: '中级 · 330人在学'},{imgurl:course2,
				title:'实例妙解Sed和Awk的秘密',
				msg: '中级 · 330人在学'},{imgurl:course3,
				title:'实例妙解Sed和Awk的秘密',
				msg: '中级 · 330人在学'},{imgurl:course4,
				title:'实例妙解Sed和Awk的秘密',
				msg: '中级 · 330人在学'},{imgurl:course5,
				title:'实例妙解Sed和Awk的秘密',
				msg: '中级 · 330人在学'}]
		},
		methods:{},
		computed:{},
		components:{
			'v-head':head,
			'v-foot':foot,
			'v-banner':banner,
			'v-options':options,
			'v-status':status,
			'v-course':course
		}
	}
</script>

<style scoped>
	*{
		margin: 0;/*no*/
		padding: 0;/*no*/
	}
	.banner{
		margin-top: -60px;/*no*/
		height: 120px;/*no*/
	}
	.mgb{
		margin-bottom: 60px;/*no*/
	}
</style>