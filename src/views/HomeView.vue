<script setup>
import { useTodoStore } from "../stores/todo";
const todoStore = useTodoStore();
</script>

<template>
  <center>
    <p> HELLO N'BOOK SUD T RUK</p>
    <p>{{ todoStore.getMessage() }}</p>

  </center>
</template>

<style></style>