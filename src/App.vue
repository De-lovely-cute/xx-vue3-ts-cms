<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  props: {
    name: {
      type: String
    }
  }
})
</script>

<style lang="less">
  .app {
    height: 100%;
  }
  .font-icon{
    height: 14px;
    width: 14px;
    margin-right: 8px;
  }
</style>
