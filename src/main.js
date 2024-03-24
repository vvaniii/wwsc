import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.directive('img-lazy', {
    //el:指令绑定元素 img
    //binding:binding.value 指令=后面表达式的值 图片url
    mounted(el, binding) {
        //console.log(el,binding.value)
        const { stop } = useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
                // console.log(isIntersecting)
                if (isIntersecting) {
                    el.src = binding.value
                    stop()
                }
            }
        )
    }
})


app.mount('#app')
