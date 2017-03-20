<template>
<div id="app">
  <Navbar></Navbar>
  <!-- <p v-if="laparStatus">Saya akan muncul kalau saya lapar</p> -->
  <!-- <button @click="jadiLapar">Saya lapar nih</button> -->
  <!-- <br> -->
  <!-- <img src="./assets/logo.png"> -->
  <router-view></router-view>
</div>
</template>

<script>
let initialState = () => {
  return {
    message: "Stackoverflow"
  }
}
import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  },
  //data state--> data yang mempengaruhi bagaimana sebuah halaman web ditampilkan
  data: initialState,
  methods: {
    jadiLapar() {
      if (this.laparStatus) {
        this.laparStatus = false;
      } else {
        this.laparStatus = true;
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
