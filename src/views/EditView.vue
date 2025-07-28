<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useTodoStore } from "../stores/todo";

const feature = ref();
const todoStore = useTodoStore();

const route = useRoute();

</script>

<template>
    <center>
        <p>Edit ID: {{ route.params.id }}</p>
        <p>{{ todoStore.getMessage() }}</p>
    </center>
</template>

<style scoped></style>
