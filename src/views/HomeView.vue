<script setup>
import { useTodoStore } from "../stores/todo";
const todoStore = useTodoStore();
</script>

<template>
  <center>
    <p> Finish new feature 2nd.</p>
    <p>{{ todoStore.getMessage() }}</p>

  </center>
</template>

<style></style>