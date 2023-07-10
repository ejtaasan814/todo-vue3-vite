<script setup>
import { ref, onMounted } from 'vue';
import ContainerComp from './ContainerComp.vue';
import ListComp from '../ListComp.vue';
import LoaderComp from '../LoaderComp.vue';

const spin = ref(true);

onMounted(() => {
  setTimeout(() => {
    spin.value = !spin.value
  }, 3000); 
})
</script>


<template>
    <LoaderComp :spin="spin"/>
    <ContainerComp>
      <ListComp />
    </ContainerComp>
</template>


