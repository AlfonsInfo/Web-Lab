<script >
import { defineComponent} from 'vue'
import data from '../../vue-project-01/src/script'
const dataLagi= data;
export default defineComponent({
  data(){
    return {
        dataLagi
      // nama : 'Alfons'
    }
  }
})
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <p></p>
  </header>

  <main>
    <!-- <h1>{{Data }}</h1> -->
    <h1>{{ dataLagi.nama }}</h1>
  </main>
</template>

<style scoped>

</style>
