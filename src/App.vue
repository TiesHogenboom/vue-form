<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/" exact-active-class="active">Cards</RouterLink>
        <RouterLink to="/form" exact-active-class="active">Form</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style>
* {
font-family: 'Lato', sans-serif;
padding: 0;
margin: 0;
text-decoration: none;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-bottom: 3px solid black;
}
nav a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 30px;
  margin: 20px;
  border: 3px solid black;
  color: black;
}
.active{
  color: white;
  background: black;

}
</style>