<script setup lang="ts">
import { RouterView } from "vue-router";
import AppSideBar from "@/components/AppSideBar.vue";
import AppHeader from "@/components/AppHeader.vue";
</script>

<template>
  <div class="layout">
    <AppSideBar />
    <div class="content">
      <AppHeader />
      <main class="page">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.page {
  padding: 1.5rem;
  flex: 1;
  background: var(--color-beige);
}
</style>
