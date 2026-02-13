import { defineStore } from "pinia";

type Theme = "light" | "dark";

export const useUiStore = defineStore("ui", {
  state: () => ({
    sidebarOpen: true,
    theme: "light" as Theme,
  }),

  actions: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },

    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      this.applyTheme();
    },

    applyTheme() {
      document.documentElement.setAttribute("data-theme", this.theme);
    },

    initTheme() {
      this.applyTheme();
    },
  },
  persist: true,
});
