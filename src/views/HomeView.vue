<script setup>
import { useTodoStore } from "../stores/todo";
const todoStore = useTodoStore();
</script>

<template>
  <center>
    <p> Fix bug </p>
    <p>{{ todoStore.getMessage() }}</p>

  </center>
</template>

<style></style>