import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './assets/custom.css'
import './assets/tailwind.css'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
