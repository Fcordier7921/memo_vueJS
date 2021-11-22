import Acceuil from './components/Acceuil.vue'
import page1 from './components/pageOne.vue'
import page2 from './components/pageTwo.vue'
import post from './components/post.vue'

export default [
    { path: '/', component: Acceuil },
    { path: '/page1', component: page1 },
    { path: '/page2', component: page2 },
    { path: '/blogpost/:id', component: post }
]