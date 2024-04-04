import { createApp } from 'vue'

import App from './App.vue'

import router from '@/router'

const app = createApp(App)
/**
 * md编辑轻量版
 */
// import VueMarkdownEditor from '@kangc/v-md-editor'
// import '@kangc/v-md-editor/lib/style/base-editor.css'

// import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
// import '@kangc/v-md-editor/lib/theme/style/vuepress.css'

// import Prism from 'prismjs'

// VueMarkdownEditor.use(vuepressTheme, {
//   Prism: Prism,
//   codeHighlightExtensionMap: {
//     vue: 'html',
//   },
// })
// app.use(VueMarkdownEditor)

/**
 * md编辑进阶版
 */
import VMdEditor from '@kangc/v-md-editor/lib/codemirror-editor'
import '@kangc/v-md-editor/lib/style/codemirror-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
// import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
// // import '@kangc/v-md-editor/lib/theme/style/github.css';
import hljs from 'highlight.js'
import Prism from 'prismjs'
// import './vuepress.css'
// codemirror 编辑器的相关资源
import Codemirror from 'codemirror'
// mode
import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/mode/vue/vue'
import 'codemirror/mode/go/go'
import 'codemirror/mode/php/php'
// edit
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/edit/matchbrackets'
// placeholder
import 'codemirror/addon/display/placeholder'
// active-line
import 'codemirror/addon/selection/active-line'
// scrollbar
import 'codemirror/addon/scroll/simplescrollbars'
import 'codemirror/addon/scroll/simplescrollbars.css'
// style
import 'codemirror/lib/codemirror.css'

VMdEditor.Codemirror = Codemirror
VMdEditor.use(vuepressTheme, {
  Hljs: hljs,
  Prism: Prism,
  codeHighlightExtensionMap: {
    vue: 'html',
  },
})

app.use(VMdEditor)

app.use(router)
app.mount('#app')
