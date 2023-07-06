<script setup>
import { useMyState } from '../stores/pinia';
import { updateTheme } from '../services/localStorage.js';

const myState = useMyState();

//
const toggleTheme = () => {
   myState.theme = !myState.theme;

   //update theme on localStorage
   updateTheme(myState.theme);
}

</script>


<template>
  <div class="mt-2 mr-2">
    <label class="ui-switch">
      <input type="checkbox" :checked=myState.theme @click="toggleTheme">
      <div class="slider">
        <div class="circle"></div>
      </div>
    </label>
  </div>
</template>


<!-- Apply the style to this component only -->
<style scoped>
  @import "../assets/css/switchbutton.scss";
</style>