<template>
  <div class="layout-main">
    <app-header></app-header>
    <main class="page-main">
      <slot></slot>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export default {
  name: "main-layout",
  components: {
    AppHeader, AppFooter
  }
}

</script>  