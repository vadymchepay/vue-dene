<template>
  <div id="app">
   <main-layout>
     <router-view/>
   </main-layout>
  </div>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout) + "-layout";
    }
  },
  components: {
    MainLayout
  }
};
</script>

<style lang="scss">
</style>
