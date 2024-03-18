<script setup lang='ts'>
import { onMounted } from 'vue';

onMounted(() => {
  const adsbygoogle = window.adsbygoogle || [];
  adsbygoogle.push({});
})
</script>
<template>
  <div class="google-ads">
    <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-8990964151180359"
     data-ad-slot="7980586236"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
  </div>
</template>
<style scoped>
.google-ads {
  height: 250px; 
}
</style>
