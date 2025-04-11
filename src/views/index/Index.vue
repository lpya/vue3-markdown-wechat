<template>
  <div class="index">
    <MdEditor v-model="editorVal" :codeFoldable="true" :pageFullscreen="true" @change="handleChange">
      <template #toolbar>
        <div class="custom-toolbar">
          <button>加粗</button>
        </div>
      </template>
    </MdEditor>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const editorVal = ref('Hello Editor!');

onMounted(() => {
  init()
})
function init() {
  const val = localStorage.getItem("text")
  if (val) {
    editorVal.value = val
  }
}
function handleChange(val) {
  localStorage.setItem("text", val)
}
</script>
<style lang="scss">
@import "./index.scss";
</style>