<template>
	<div>
		<h2>{{msg}}</h2><hr>
		<h3>{{$store.state.count}}--{{count}}</h3>
		<!-- <h3>模块组{{$store.state.a.count}}</h3> -->
		<p>
			<button @click="$store.commit('add',10)">增加</button>
			<!-- 调用仓库的方法$store.commit('add') -->
			<button @click="reduce">减少</button>
		</p>
		<p>
			<button @click="addActions">增加</button>
			<button @click="reduceActions">减少</button>
		</p>
	</div>
</template>

<script>
import store from '@/vuex/store';
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default{
	data(){
		return{
			msg:'hello vuex'
		}
	},
	// computed:{
	// 	// 第一种方法，简单值的输出
	// 	count(){
	// 		return this.$store.state.count;
	// 	}
	// },
	// 第二种方法
	// computed:mapState({
	// 	count:state=>state.count
	// }),
	// 第三方方法
	computed:{
		...mapState(['count']),
		// count(){
		// 	return this.$store.getters.count
		// }
		...mapGetters(['count'])
	},
	//第二种方法
	//methods:mapMutations(['add','reduce']),
	methods:{
		...mapMutations(['add','reduce']),
		...mapActions(['addActions','reduceActions'])
	},
	store
}
</script>