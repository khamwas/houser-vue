import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vuetify/dist/vuetify.min.css';
// @import '~vuetify/src/stylus/main';
import Vuetify from 'vuetify';

Vue.use(Vuetify, {
	iconfont: 'md',
	//theme for material design
	theme: {
		primary: '#519872', // grey darken-3
		secondary: 'e5f4ec',
		tertiary: 'afd4c0',
		background: 'afd4c0',
		success: '#dedede', // orange darken-2
		info: '#3b5249', // blue darken-4
		error: '#D32F2F' //red darken-2
	}
});

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app');
