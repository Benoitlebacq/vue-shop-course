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
