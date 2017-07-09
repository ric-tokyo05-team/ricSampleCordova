import Vue from 'vue'
import Router from 'vue-router'
import First from './components/First.vue'
import Second from './components/Second.vue'
import Third from './components/chat_test.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        { path: '/', name: 'First', component: First },
        { path: '/second', name: 'Second', component: Second },
        { path: '/third', name: 'Third', component: Third }
    ]
})

export default router