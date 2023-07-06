<script setup>
import { useMyState } from '../stores/pinia';
import AddTask from './AddTask.vue';

const myState = useMyState();

//Methods
const close = (status) => {
  status ? myState.statusSuccess = '' : myState.statusError = '' ;
}

const showCloseAddForm = () => {
  myState.addComptToggler = !myState.addComptToggler
}


</script>
<template>
  
<div v-if="myState.statusError" class="flex flex-wrap flex-col md:flex-row w-full justify-center">
    
    <div class="relative basis-1/2 border border-red-500 shadow rounded-md px-2 py-2 w-full" >
      <span class="absolute top-0 right-0 px-2 text-black cursor-pointer" @click="close(0)">x</span>
      <p class="text-red-500">{{myState.statusError}} </p>
    </div>
  
</div>

<div v-if="myState.statusSuccess" class="flex flex-wrap flex-col md:flex-row w-full justify-center">
  
    <div class="relative basis-1/2 border border-blue-300 shadow rounded-md px-2 py-2 w-full" @click="close(1)">
      <span class="absolute top-0 right-0 px-2 text-black cursor-pointer" @click="close(1)">x</span>
      <p class="text-blue-300">{{myState.statusSuccess}} </p>
    </div>
    
</div>


<div class="flex flex-wrap flex-col md:flex-row w-full justify-center">
    <div :class="`rounded-md shadow-md bg-slate-100 basis-1/2 py-4 px-4 flex flex-col gap-2 relative`">
      
      <div class="w-full bg-slate-100 h-full overflow-auto mb-10">

        <div v-if="myState.taskLists.length > 0">
          <div class="px-2 py-2" v-for="task in myState.taskLists" :key="task">
            <input type="checkbox" class="checked:bg-blue-500"/>
            <label :class="`text-black px-2 py-2 ${ task.done ? 'line-through' : '' }`">{{ task.name }} </label>
          </div>
        </div>
        <div v-else class="flex justify-center">
          <h3>No tasks found</h3>
        </div>
        
        <!--Load Addtask Component-->
        <AddTask />
      </div>

      <div class="flex justify-center absolute inset-x-0 -bottom-4">
        <button @click="showCloseAddForm()" :class="`text-black bg-blue-300 w-1/2 p-2 mt-2 mb-2 ${!myState.addComptToggler ? 'bg-blue-200' : 'bg-red-500' }`" >{{ !myState.addComptToggler ? 'Add Task' :  'Close'}}</button>
      </div>
      
    </div>
  </div>
  
</template>