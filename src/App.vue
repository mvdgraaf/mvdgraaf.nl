<template>
  <div>
    <div v-html="pageBody"></div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue';
import pageBody from './content/coming-soon.html?raw';
import { setupSite } from './scripts/site.js';
let cleanup = null;
onMounted(() => {
  cleanup = setupSite();
});
onUnmounted(() => {
  if (typeof cleanup === 'function') {
    cleanup();
  }
});
</script>
