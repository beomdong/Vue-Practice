import { createApp } from 'vue'
import App from './App.vue'
import ChartPlugin from "@/plugins/ChartPlugin"

createApp(App).use(ChartPlugin).mount('#app')
