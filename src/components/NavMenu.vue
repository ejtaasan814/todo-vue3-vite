<script setup>
import { useMyState } from '../stores/pinia';
import Switch from './SwitchButton.vue';

const myState = useMyState();

</script>

<template>
  <div :class="`${myState.getTheme} flex justify-end`">
    <Switch />
  </div>
</template>

