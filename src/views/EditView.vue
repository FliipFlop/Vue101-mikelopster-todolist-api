<script setup>
    import { onMounted, ref } from 'vue';
    import { useTodoStore } from "../stores/todo";
    import { useRouter, useRoute } from 'vue-router';
    import Loading from '../components/Loading.vue';

    const todoStore = useTodoStore();
    const router = useRouter();
    const route = useRoute();
    const todoId = ref(-1);
    const isLoading = ref(false);
    const isUpdated = ref(false);

    onMounted(async () => {
        isLoading.value = true;
        todoId.value = parseInt(route.params.id);
        await todoStore.loadTodo(todoId.value);
        isLoading.value = false;
    });

    const saveTodo = async (selectedTodo) => {
        isLoading.value = true;
        const updateTodo = {
            name: selectedTodo.name,
            status: selectedTodo.status,
        }
        await todoStore.editTodo(updateTodo, selectedTodo.id);
        isLoading.value = false;

        isUpdated.value = true;
        setTimeout(()=>{
            isUpdated.value = false;
        }, 3000);
    }

    const redirectToList = () => {
        router.push({
            name: "todo-list",
        })
    }
</script>

<template>
    <div v-if="isLoading">
        <Loading></Loading>
    </div>
    <div class="w-1/2 mx-auto" v-else>

        <div class="toast">
            <div v-if="isUpdated" class="alert alert-info">
                <span>Update Successful</span>
            </div>
        </div>

        ID <div class="badge badge-accent">{{ todoStore.selectedTodo.id }}</div>

        <fieldset class="fieldset">
            <legend class="fieldset-legend">Name</legend>
            <input type="text" class="input input-bordered w-full" v-model="todoStore.selectedTodo.name" />
        </fieldset>

        <fieldset class="fieldset">
            <legend class="fieldset-legend">Status</legend>
            <select class="select select-bordered w-full" name="todoStatus" id="dropdownTodoStatus"
                v-model="todoStore.selectedTodo.status">
                <option value="">[Select]</option>
                <option :value="status" v-for="(status, index) in todoStore.statusList" :key="index">
                    {{ status }}
                </option>
            </select>
        </fieldset>

        <div class="flex mt-2 justify-between">
            <button class="btn btn-secondary" @click="redirectToList()">Back</button>
            <button class="btn btn-primary" @click="saveTodo(todoStore.selectedTodo)">Save</button>
        </div>
    </div>



</template>

<style scoped></style>