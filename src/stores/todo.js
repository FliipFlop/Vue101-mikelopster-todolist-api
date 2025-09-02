import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

const BASE_URL = 'https://65f2cdb6105614e6549eeaef.mockapi.io'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todoList: [],
    selectedTodo: {},
    statusList: ["Pending", "Doing", "Done"]
  }),
  actions: {
    async loadTodos() {
      try {
        const response = await axios.get(`${BASE_URL}/todos`);
        this.todoList = response.data;
      } catch (error) {
        console.log("error", error);
      }
    },
    async loadTodo(id) {
      try {
        const response = await axios.get(`${BASE_URL}/todos/${id}`);
        this.selectedTodo = response.data;
      } catch (error) {
        console.log("error", error);
      }
    },
    async addTodo(todoText) {
      const body = {
        name: todoText,
        status: "Pending",
      }

      try {
        const response = await axios.post(`${BASE_URL}/todos`, body);
        this.todoList.push(response.data);
        console.log('Add todo complete.');
      } catch (error) {
        console.log("error", error);
      }
    },
    async editTodo(todoData, id) {
      try {
        await axios.put(`${BASE_URL}/todos/${id}`, todoData);
        console.log('Edit todo complete.');
      } catch (error) {
        console.log("error", error);
      }
    },
    async deleteTodo(id) {
      try {
        await axios.delete(`${BASE_URL}/todos/${id}`);
        console.log('Delete todo complete.');
      } catch (error) {
        console.log("error", error);
      }
    }
  }
});
