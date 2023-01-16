<script setup lang="ts">
import {RouterView } from 'vue-router'
import Header from './components/layout/Header.vue';

</script>

<template>
<Header></Header>
<RouterView />
</template>

<style lang="scss">
html{
  background: $negro;
}
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: $negro !important;
}
.page{
  margin-top: 65px;
}

</style>
