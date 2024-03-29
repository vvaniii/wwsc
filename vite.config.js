import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// element-plus 按需引入插件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // element-plus配置插件
    AutoImport({
      resolvers: [ElementPlusResolver()],
      //指定自动导入的包
      imports: ['vue', 'vue-router', 'pinia', '@vueuse/core',],
      //文件地址
      dts: './src/types/auto-imports.d.ts',
      //指定目录，目录的模块会被自动导入
      dirs: ['./src/**/*'],
      //是否支持在vue模板中使用
      vueTemplate: true


    }),
    Components({
      //自定义组件
      dirs: ['./src/components', './src/views', './src/apis', './src/Home', './scr/store'],
      dts: './src/types/components.d.ts',
      resolvers: [
        // 1. 配置elementPlus采用sass样式配色系统
        ElementPlusResolver({ importStyle: "sass" }),

      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 自动导入定制化样式文件进行样式覆盖
        additionalData: `
          @use "@/styles/element/index.scss" as *;
          @use "@/styles/var.scss" as *;       
        `,
      }
    }
  }
})