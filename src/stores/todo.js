import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    userA: "A",
    userB: "B"
  }),
  actions: {
    getMessage() {
      return `${this.userA} +++ ${this.userB}`;
    }
  }
})
