<script setup>
import { useMyState } from '../../stores/pinia';
const myState = useMyState();
</script>


<template>
  <div :class="`transition ease-in-out delay-150 duration-300 flex justify-center w-full h-screen flex-col ${myState.getTheme}`">
    <slot></slot>
  </div>
</template>