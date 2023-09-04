<template lang="pug">
NuxtLink(:to="link" class="default-btn") Читать
</template>

<script setup>


defineProps(['link'])


</script>

<style lang="scss" scoped>

.default-btn {
  background-color: #1B1B1B;
  color: #fff;
  font-size: 18px;
  line-height: 26px;
  text-decoration: none;
  display: inline-flex;
  padding: 10px 50px;
  font-weight: 400;
}
</style>