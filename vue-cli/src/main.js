import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

//fort-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

App.component('font-awesome-icon', FontAwesomeIcon)

App.config.productionTip = false