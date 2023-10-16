<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Cards</RouterLink>
        <RouterLink to="/form">Form</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>