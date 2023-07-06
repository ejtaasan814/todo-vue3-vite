<script setup>
import { onMounted, watch} from 'vue'
import { getLocalData, defTheme } from './services/localStorage.js';
import { useMyState } from './stores/pinia';
import ListComp from './components/ListComp.vue';
import NavMenu from './components/NavMenu.vue';

const myState = useMyState();

const getTodos = () =>{
    console.log('Get local data');
    const apidata = getLocalData();
    myState.taskLists = todoSort(apidata);

    //Get the default theme on localStorage
    myState.theme = defTheme();
    console.log(myState.theme);
}

// method for sort
const todoSort = (data) => {
  console.log('SORT DATA')
  const arr = data
  arr.sort(function(a, b) {
    var keyA = a.name,
    keyB = b.name;

    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });
  return arr;
}



//Watchers

//Watch addFlag data if changed then sort
watch(() => myState.addFlag, () => {
    console.log('WATCHER CHANGED')
    myState.taskLists = todoSort(myState.taskLists)
  },
)

//Mounted lifecycle hook
onMounted(() => {
  getTodos()
})

</script>

<template>
  <main>
    <NavMenu />
    <div :class="`flex justify-center w-full h-screen flex-col ${myState.getTheme}`">
      <ListComp />
    </div>
  </main>
</template>
