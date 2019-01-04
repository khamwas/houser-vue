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
				//console.log(res.data)
				this.commit('DELETE_HOUSE', res.data);
			});
		},
		addHouse(context, house) {
			axios.post('/api/houses', house).then((res) => {
				//console.log(res.data)
				this.commit('ADD_HOUSE', res.data);
			});
		}
	}
});
