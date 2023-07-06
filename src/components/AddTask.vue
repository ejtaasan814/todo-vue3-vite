<script setup>
import { ref } from 'vue'
import { useMyState } from '../stores/pinia';
import { addLocalTodo } from '../services/localStorage.js';

const myState = useMyState();

//Reactive data
//task.value to get the value
const tasks = ref({
  name: null,
  description:null
})


//Methods
const saveTask = async() => {
  const { name, description} = tasks.value;
  const insert = {
    'name': name,
    'description' : description,
    'done' : false,
    'createdAt': new Date()
  }

  console.log(insert);
  myState.taskLists.push(insert);
  
  addLocalTodo(myState.taskLists)
  myState.addFlag++
}

</script>


<template>
  <div>
    <form @submit.prevent="saveTask()" v-show="myState.addComptToggler">
      <div class="bg-slate-200 p-4 shadow-2xl">

        <div class="flex justify-start max-w-sm w-full mx-auto">
          <input type="text" class="border border-blue-300 shadow rounded-md p-2 max-w-sm w-full mx-auto" name="todo_name" placeholder="Name" v-model="tasks.name" />
        </div>

        <div class="flex justify-start max-w-sm w-full mx-auto mt-2">
          <input type="text" class="border border-blue-300 shadow rounded-md p-2 max-w-sm w-full mx-auto" name="todo_description" placeholder="Description" v-model="tasks.description" />
        </div>

        <div class="flex justify-end max-w-sm w-full mx-auto">
          <button type="submit" class="text-dark bg-blue-300 p-2 px-10 mt-2" >Save</button>
        </div>
        
      </div>
    </form>
  </div>
</template>
