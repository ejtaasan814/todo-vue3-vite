import { defineStore } from 'pinia'

export const useMyState =  defineStore({
  id: 'useMyState',
  
  state: () => ({ 
    myCount: 0,
    taskLists: [],
    statusError: '',
    statusSuccess: '',
    addFlag:0,
    theme: false
  }),

  getters: {

    getStatus(){
      return this.statusSuccess
    },

    getTheme() {
      return !this.theme ? 'bg-white' : 'dark:bg-slate-800';
    }
  },

  actions: {
    response (stats, msg){  
      if(stats){
        this.statusSuccess = msg;
        this.statusError = '';
      }else{
        this.statusSuccess = '';
        this.statusError = msg;
      }
    }
  }

})