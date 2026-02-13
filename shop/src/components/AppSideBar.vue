<script setup lang="ts">
import CloseIcon from "@/assets/CloseIcon.vue";
import { useUiStore } from "@/stores/ui";

const navLinks = [
  { path: "/", name: "Home", icon: "🏠" },
  { path: "/caskets", name: "Casquettes", icon: "🧢" },
  { path: "/jackets", name: "Vestes", icon: "🧥" },
  { path: "/boxers", name: "Boxers", icon: "🩳" },
];

const ui = useUiStore();
</script>

<template>
  <aside :class="['sidebar', { collapsed: !ui.sidebarOpen }]">
    <button
      v-if="ui.sidebarOpen"
      @click="ui.toggleSidebar"
      class="icon text-white"
    >
      <CloseIcon />
    </button>
    <button v-else class="icon" @click="ui.toggleSidebar">☰</button>
    <nav>
      <RouterLink
        v-for="link in navLinks"
        :key="link.name"
        :to="link.path"
        class="nav-link"
      >
        <span v-if="ui.sidebarOpen">{{ link.name }}</span>
        <span v-else class="link-icon">{{ link.icon }}</span>
      </RouterLink>
    </nav>
  </aside>
</template>

<style scoped>
aside {
  display: flex;
  flex-direction: column;
}
button {
  align-self: flex-start;
}
.sidebar {
  width: 220px;
  background: var(--color-bg-sidebar);
  color: white;
  padding: 1.5rem 1rem;
  transition: width 0.25s ease;
}

.sidebar.collapsed {
  width: 70px;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  color: white;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: background 0.2s ease;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.15);
}

/* 🔥 ACTIVE LINK */
.nav-link.router-link-active {
  background: rgba(255, 255, 255, 0.25);
  font-weight: 600;
}
.icon {
  background: none;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
  color: white;
}
nav {
  margin-right: auto;
  margin-top: 2em;
}
</style>
