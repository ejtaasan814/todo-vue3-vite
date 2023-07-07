<script setup>
import { useMyState } from '../stores/pinia';
import AddTask from './AddTask.vue';
import SwitchButton from './SwitchButton.vue';
import { updateLocalTodo } from '../services/localStorage.js';

const myState = useMyState();

const deleteTodo = (taskVal) => {
  //Get the index of the passed object
  const index = myState.taskLists.indexOf(taskVal);

  //Remove the object in array state
  myState.taskLists.splice(index, 1);

  //update local storage
  updateLocalTodo(myState.taskLists);
}

const deleteAllTodo = (message) => {
  if(confirm(message)){
    //Clear array state
    myState.taskLists = [];
    //update local storage
    updateLocalTodo(myState.taskLists);
  }
  return;
}

</script>
<template>

<div class="flex w-full justify-center p-5">
    <!--Container-->
    <div class="w-full md:w-1/2 p-7 h-full rounded-md bg-slate-100">

      <div class="flex flex-wrap">
        <div class="w-5/6 font-sans text-3xl">
          <p>Todo App</p>
        </div>
        <div class="w-1/6 flex justify-end">
          <SwitchButton />
        </div>
      </div>

      <!--Form-->
        <AddTask />
      <!--End Form-->

      <!--List-->
      <div class="w-full flex flex-wrap justify-center mt-5" v-for="task in myState.taskLists" :key="task">

          <!--Item-->
          <div class="w-full mt-2 flex justify-center bg-slate-200 shadow-md rounded-md">
            <div class="w-5/6 p-3 flex justify-start items-center">
              <p>{{ task.name }}</p>
            </div>
            <div class="w-1/6">
              <button class="bg-red-300 hover:bg-red-500 w-full h-full flex justify-center items-center rounded-md" @click="deleteTodo(task)">
                <img class="w-5/6 lg:w-1/2" src="@/assets/images/delete.svg" />
              </button>
            </div>
          </div>
          <!--End Item-->

        </div>
        <!--End List-->

        <div class="flex mt-10 justify-center">
          <div class="w-2/3 md:w-5/6 flex justify-start items-center">
            <p>You have {{myState.taskLists.length}} pending tasks</p>
          </div>
          <div class="w-1/3 md:w-1/6">
            <button class="bg-sky-300 hover:bg-sky-500 w-full p-2 rounded-sm" @click="deleteAllTodo('Are you sure you want to delete all tasks?')">
                Clear All
            </button>
          </div>
        </div>

    </div>
    <!--End Container-->
</div>
  
</template>