
import App from '@component/app.vue'
import Hello from '@component/hello.vue'

const router = new VueRouter()

router.map({
  '/hi': {
    component: Hello
  }
})

router.start(App, '#app')
