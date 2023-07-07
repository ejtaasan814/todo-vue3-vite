<script setup>
import { ref } from 'vue'
import { useMyState } from '../stores/pinia';
import { updateLocalTodo } from '../services/localStorage.js';

const myState = useMyState();

//Reactive data
//task.value to get the value
const tasks = ref({
  name: null
})


//Methods
const saveTask = async() => {
  const { name } = tasks.value;
  const insert = {
    'name': name,
    'done' : false,
    'createdAt': new Date()
  }

  //Add the object inside array state
  myState.taskLists.push(insert);
  
  //update local storage
  updateLocalTodo(myState.taskLists)
  myState.addFlag++
}

</script>


<template>
  <div>
    <form @submit.prevent="saveTask()">
      <!--Form-->
      <div class="flex flex-wrap mt-4">
        <div class="w-5/6 flex justify-center">
          <input 
            type="text"
            name="tasks.name"
            class="p-5 w-5/6 focus:outline-none"
            placeholder="Add your new todo"
            v-model="tasks.name"
            required
            >
        </div>
        <div class="w-1/6">
          <button class="bg-sky-500 p-2 h-full w-full flex justify-center items-center rounded-md hover:bg-sky-700">
            <img class="w-5/6 md:w-5/6 lg:w-1/2" src="@/assets/images/plus.svg" />
          </button>
        </div>
      </div>
      <!--End Form-->
    </form>
  </div>
</template>
