<script setup>
// import data from '../../vue-project-01/src/script'
import "vuetify/dist/vuetify.min.css";
// const data1 = data;
const dataLagi= {
  nama : 'Alfons'
}

// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <p></p>
  </header>

  <main>
    <!-- <h1>{{Data }}</h1> -->
    <!-- //* Kalo tidak pake setup tidak bisa detect nama langsung -->
    <h1>{{ dataLagi.nama}}</h1>
  </main>
</template>

<style scoped>

</style>
