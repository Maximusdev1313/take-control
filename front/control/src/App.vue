<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="main">
    <header>
      <div class="container">
        <input
          type="text"
          name="search"
          id=""
          placeholder="Qidirish"
          class="search-input"
        />
      </div>
    </header>
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
header {
  width: 100%;
  height: 60px;
  background-color: var(--vt-c-divider-dark-1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-input {
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 15px;
}
</style>
