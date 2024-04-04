import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { prismjsPlugin } from 'vite-plugin-prismjs'
export default defineConfig({
  base: './',
  define: {
    'process.env': {}
  },
  plugins: [
    vue(),
    prismjsPlugin({
      languages: ['go', 'html', 'js', 'css', 'go', 'shell','php','sql','python'],
      // 配置行号插件
      plugins: ['line-numbers'],
      theme: 'coy',
      css: true
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      views: path.resolve(__dirname, 'src/views')
    }
  },
  server: {
    port: 30005,
  }
});
