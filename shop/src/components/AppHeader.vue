<template>
  <header class="header">
    <div class="header-left">
      <h1>Console.log<span class="parentheses">( )</span></h1>
    </div>
  </header>
</template>

<style scoped>
.header {
  height: 82px;
  background: var(--color-bg-header);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
}
.header-left {
  display: flex;
  justify-content: center;
  flex: 1;
}

.icon {
  background: none;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
  color: var(--color-text-main);
}
.parentheses {
  color: var(--color-parentheses);
}
</style>
