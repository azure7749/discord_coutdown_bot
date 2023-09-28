import { defineStore } from "pinia";

export const useAppStore = defineStore('app', {

    state:() => ({
        cliet:null,
        commandsActionMap: null,
    }),
    getters: {}, 
    actions:{},
})