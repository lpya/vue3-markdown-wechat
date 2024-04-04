<template>
  <div class="index">
    <v-md-editor v-model="content" :disabled-menus="[]" :default-fullscreen="isFullscreen" @change="handleChange"
      left-toolbar="undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code | customToolbar1"></v-md-editor>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, toRefs } from 'vue'
const state = reactive({
  isFullscreen: true,
  content: `>**微信公众号：RMRF**
关注可了解更多的教程，问题或建议，请公众号留言;

该工具使用了【v-md-editor】组件库来实现，主要用于公众号的内容排版、代码高亮。目前只稍微修改了主题样式，如果有喜欢的主题可以在公众号留言，后续会出相应的自定义样式、排版风格等功能。

### 文字

**我已经加粗了**

*我是斜体*

~~我是删除线~~

### 列表

- 无序列表
- 无序列表
- 无序列表

1. 有序列表
2. 有序列表
3. 有序列表

### 引用块

>我是引用块
每天进步一点点

### 标题

支持6种大小的标题，分别对应\`#\`,\`##\`,\`###\`,\`####\`,\`#####\`,\`######\`如：

#### 四级标题
##### 五级标题
###### 六级标题

### 图片

可以使用\`![Description](https://)\`来插入图片链接

![Description](https://www.lpya.cn/static/uploads/20230822/6cbe0e9390dbff486c0a45ce39e50479.png)

### 代码

因为公众号自带的代码高亮比较单一无法满足需求，自己可能需要自定义一些样式，如暗黑模式等。那就需要使用外部插件来达到自己想要的效果了。

**HTML**

\`\`\`html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World!</title>
  <style>
    #app {
      padding: 0px;
      margin: 0px;
      font-size: 20px;
    }
  </style>
</head>

<body>
  <div id="#app">
    <button onclick="onclick">Hello World!</button>
  </div>
</body>

</html>
\`\`\`

**golang**
\`\`\`go
package main

import "fmt"

func main()  {
  fmt.Println("Hello World!")
}
\`\`\`

**SQL语句**
\`\`\`sql
SELECT id,title FROM article WHERE id = 1;  
\`\`\`

### 表格

|ID|文章名称|
|-|-|
|1|threejs实现地铁线路图流光效果|
|2|threejs实现地铁线路图流光效果|
|3|threejs实现地铁线路图流光效果|

>**温馨提示**
目前编辑的内容会自动保存到浏览器缓存\`localStorage\`，但重要内容请记得做备份
`
})
const { isFullscreen, content } = toRefs(state)

const init = () => {
  const text = localStorage.getItem("content")
  if (text) {
    state.content = text
  }
}
init()

const handleChange = (text: string, html: string) => {
  localStorage.setItem("content", text)
}


</script>

<style lang="scss">
.index {
  .v-md-editor {
    height: 100vh;
  }
}

.vuepress-markdown-body div[class*='v-md-pre-wrapper-'] pre,
.vuepress-markdown-body div[class*='v-md-pre-wrapper-'] pre[class*='v-md-prism-'] {
  background: #282c35 !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  border-left: 5px solid #608ce7;
  padding-left: 10px;
}

.vuepress-markdown-body blockquote {
  border-left: 4px solid #608ce7;
  color: #2c3e50;
  background: #e3ebfa;
}

.vuepress-markdown-body:not(.custom) img {
  border-radius: 5px;
  padding: 8px;
  background: #e3ebfa;
  border-radius: 5px;
}

.v-md-plugin-tip {
  background: #f3f5f7 !important;
  border-left: 10px solid red !important;
}

.token.operator,
.token.entity,
.token.url,
.token.variable {
  background: none;
}</style>
