import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/wizard',
			name: 'wizard',

			component: () => import('./components/Wizard.vue')
		},
		{
			path: '/house/:id',
			name: 'house',

			component: () => import('./components/House.vue')
		},
		{
			path: '/',
			name: 'dashboard',

			component: () => import('./components/Dashboard.vue')
		}
	]
});
