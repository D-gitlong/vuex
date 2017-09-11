import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={ //这就是状态对象，共享值	
	count:3
}
const mutations={  //改变状态对象的值，方法
	add(state,n){
		state.count+=n;
	},
	reduce(state){
		state.count--
	}

}
const getters={ //跟computed类似
	count:state=>{ 
		state.count+=100;
	}
	
}
const actions={
	addActions(context){
		context.commit('add',10);
		setTimeout(()=>{context.commit('reduce')},3000);
		console.log('我先比reduce先输出')

	},
	reduceActions({commit}){
		commit('reduce')
	}
}
const moduleA={
	state,
	mutations,
	getters,
	actions
}

export default new Vuex.Store({
	//modules:{a:moduleA} //模块组
	state,
	mutations,
	getters,
	actions
})




