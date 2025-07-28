<script setup>
import { useTodoStore } from "../stores/todo";
const todoStore = useTodoStore();
</script>

<template>
  <center>
    <p> Dev new feature</p>
    <p>{{ todoStore.getMessage() }}</p>

  </center>
</template>

<style></style>