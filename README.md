# Houser Real Estate App in Vue

#### a project by Emmanuel Bravo

Project started Jan 4, 2019 and completed on Jan 4, 2019.
Approximately 6 hours worked independently.

#### Walkthrough

![example](https://media.giphy.com/media/C8C3TEbKEXdstvkeB2/giphy.gif)

#### Wizard Step 1

![step1](https://media.giphy.com/media/4PVYWuih6XgVygfWfB/giphy.gif)

#### Wizard Step 2

![step2](https://media.giphy.com/media/1ZDoc2m6kkKx9i5UE5/giphy.gif)

#### Wizard Step 3 (Add a Listing)

![step3](https://media.giphy.com/media/YiAhoyILcH72q9W4Ei/giphy.gif)

#### Delete Listing

![delete](https://media.giphy.com/media/9VyZNH66etPorRMpdq/giphy.gif)

## Table of Contents

- [Preplanning](#preplanning) - [Component Tree](#component-tree) - [Schema](#schema)
- [Main Challenges](#main-challenges) - [1. Learning Vue](#vue) - [2. Learning Vuetify](#vuetify) - [3. Learning Vuex](#vuex) - [4. Learning Vue-Router](#vue-router)
- [Technology](#technology) - [Vue](#vue) - [Vuetify](#vuetify) - [Vuex](#vuex) - [Vue-Router](#vue-router) - [Express](#express) - [Massive](#massive) - [Axios](#axios)

## Preplanning

### Component Tree

Below is the initial component tree created during pre-planning
![componentTree](https://s3.us-east-2.amazonaws.com/khamwas-readme/houser+component+tree.png)

### Schema

![schema](https://s3.us-east-2.amazonaws.com/khamwas-readme/hosuer+schema.png)

## Technology

### Vue

Coming from a React background, Vue was fairly straightforward to learn. Many ideas are parallel and of those that are not, they are fairly intuitive.

The organization of files in Vue is better suited to the way I personally work best in programming.

### Vuetify

Design libraries are incredibly useful to create a consistent standard to adhere to in your projects. That is why I decided to simultaneously learn Vuetify during my first attempt to implement the Vue framework.

Vuetify elements utilized

```html
<v-app style="{}">
	<v-content />

	<v-container />
	<v-layout />
	<v-flex />
	<v-grid />

	<v-toolbar />
	<v-toolbar-title />
	<v-toolbar-side-icon />

	<v-card />
	<v-card-title />
	<v-card-text />
	<v-card-actions />

	<v-form />
	<v-text-field />

	<v-tooltip />
	<v-tabs />
	<v-tab />
	<v-tab-item />

	<v-spacer />
	<v-btn />
	<v-img
/></v-app>
```

### Vuex

the setup for the Vuex store and action creators

```js
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		houses: []
	},

	mutations: {
		SET_HOUSES(state, houses) {
			state.houses = houses;
		},

		ADD_HOUSE(state, houses) {
			state.houses = houses;
		},

		DELETE_HOUSE(state, houses) {
			state.houses = houses;
		}
	},

	actions: {
		setHouses() {
			axios.get('/api/houses').then((res) => {
				this.commit('SET_HOUSES', res.data);
			});
		},

		deleteHouse(context, id) {
			axios.delete(`/api/houses/${id}`).then((res) => {
				this.commit('DELETE_HOUSE', res.data);
			});
		},

		addHouse(context, house) {
			axios.post('/api/houses', house).then((res) => {
				this.commit('ADD_HOUSE', res.data);
			});
		}
	}
});
```

integrating the store into the project

```js
new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app');
```

implementing the store

```js
//values
computed:  {
houseList() {
return  this.$store.state.houses;
}},
//actions
mounted() {
this.$store.dispatch("setHouses");
}
```

### Vue-Router

The set up for the router file

```js
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
```

integrating the routing into the project

```js
new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app');
```

implementing routing

```html
<template>
	<v-app style="background: #afd4c0">
		<header></header>
		<v-content align-center>
			<router-view :key="$route.fullPath"></router-view>
		</v-content>
	</v-app>
</template>
```

### Express

### Massive

### Axios

### PostgreSQL

### Heroku
