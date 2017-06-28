import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        command: "",
        command_list: ["たたかう", "どうぐ", "まほう", "にげる"],
        attack_list: ["たいあたり", "なきごえ", "ひのこ", "にらみつける"],
        item_list: ["ポーション", "エリクサー"],
        magic_list: ["ホイミ", "サンダガ"],
        api_data: undefined
    },
    getters: {
        filter_command (state) {
            return state.command_list
        }
    },
    mutations: {
        select_command (state, command) {
            if (state.command_list.indexOf(command) >= 0) {
                state.command = command;
            } else {
                state.command = "";
            }
        },
        set_api_data (state, list) {
            state.api_data = list;
        }
    },
    actions: {
        load_test_api(context) {
            return axios.get('http://localhost:8080/api/test.json')
                .then(function(response){
                    context.commit('set_api_data', response.data.list);
                })
        }
    }
})

export default store
