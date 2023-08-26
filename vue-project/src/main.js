/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
/* import the fontawesome core */

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */

/* add icons to the library */

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
