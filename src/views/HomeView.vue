<script setup>
    import { onMounted, ref, computed } from 'vue';
    import { useTodoStore } from "../stores/todo";
    import { useRouter } from 'vue-router';
    import Loading from '../components/Loading.vue';

    const todoStore = useTodoStore();
    const todoName = ref("");
    const isLoading = ref(false);
    const router = useRouter();
    const selectedStatus = ref("Pending");
    const filterTodoList = computed(() => {
        return todoStore.todoList.filter(todo => todo.status == selectedStatus.value);
    });

    onMounted(async () => {
        isLoading.value = true;
        await todoStore.loadTodos();
        isLoading.value = false;
    });

    const addTodo = async (todoName) => {
        try {
            isLoading.value = true;
            await todoStore.addTodo(todoName);
            isLoading.value = false;
        } catch (error) {
            console.log("Error", error);
        }
    };

    const editStatus = async (editTodo) => {
        try {
            const updateTodo = {
                name: editTodo.name,
                status: editTodo.status,
            }

            isLoading.value = true;
            await todoStore.editTodo(updateTodo, editTodo.id);
            isLoading.value = false;
        } catch (error) {
            console.log("Error", error);
        }
    };

    const changeStatus = async (event, todoId) => {
        isLoading.value = true;
        try {
            if (event.target.checked) {
                await todoStore.editTodo({ status: "Done" }, todoId);
            } else {
                await todoStore.editTodo({ status: "Pending" }, todoId);
            }

            await todoStore.loadTodos();
        } catch (error) {
            console.log("Error", error);
        }
        isLoading.value = false;
    }

    const deleteTodo = async (todoId) => {
        try {
            isLoading.value = true;
            await todoStore.deleteTodo(todoId);
            await todoStore.loadTodos();
            isLoading.value = false;
        } catch (error) {
            console.log("Error", error);
        }
    };

    const redirectToEdit = (todoId) => {
        router.push({
            name: "todo-edit",
            params: {
                id: todoId
            }
        })
    }

    const redirectToTest = () => {
        router.push({
            name: "test"
        });
    }

    const changeSelectedStatus = async (status) => {
        selectedStatus.value = status;
    }
</script>

<template>
    <div class="flex">
        <input class="input w-full" type="text" name="todo" id="textboxTodoName" placeholder="Item Name"
            v-model="todoName">
        <button class="btn btn-primary ml-2" @click="addTodo(todoName)">Add</button>
    </div>

    <Loading v-if="isLoading"></Loading>

    <div role="tablist" class="tabs tabs-box mt-2">
        <a role="tab" :class="selectedStatus == item ? 'tab tab-active' : 'tab'" @click="changeSelectedStatus(item)"
            v-for="(item, index) in todoStore.statusList" :key="index">
            {{ item }}
        </a>
    </div>

    <div class="flex items-center justify-between mt-2" v-for="(item, index) in filterTodoList" :key="index">
        <input type="checkbox" name="" id="" class="checkbox" :checked="item.status == 'Done'"
            @change="changeStatus($event, item.id)" :key="item.id"/>

        <div :class="item.status == 'Done' ? 'line-through' : ''">
            {{ item.name }}
        </div>

        <!-- <select name="todoStatus" id="dropdownTodoStatus" v-model="item.status" @change="editStatus(item)">
            <option value="">[Select]</option>
            <option :value="status" v-for="(status, index) in todoStore.statusList" :key="index">
                {{ status }}
            </option>
        </select> -->

        <div>
            <button class="btn btn-square btn-outline" @click="redirectToEdit(item.id)">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 640">
                    <path
                        d="M535.6 85.7C513.7 63.8 478.3 63.8 456.4 85.7L432 110.1L529.9 208L554.3 183.6C576.2 161.7 576.2 126.3 554.3 104.4L535.6 85.7zM236.4 305.7C230.3 311.8 225.6 319.3 222.9 327.6L193.3 416.4C190.4 425 192.7 434.5 199.1 441C205.5 447.5 215 449.7 223.7 446.8L312.5 417.2C320.7 414.5 328.2 409.8 334.4 403.7L496 241.9L398.1 144L236.4 305.7zM160 128C107 128 64 171 64 224L64 480C64 533 107 576 160 576L416 576C469 576 512 533 512 480L512 384C512 366.3 497.7 352 480 352C462.3 352 448 366.3 448 384L448 480C448 497.7 433.7 512 416 512L160 512C142.3 512 128 497.7 128 480L128 224C128 206.3 142.3 192 160 192L256 192C273.7 192 288 177.7 288 160C288 142.3 273.7 128 256 128L160 128z" />
                </svg>
            </button>

            <button class="btn btn-square btn-outline ml-2" @click="deleteTodo(item.id)">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 640">
                    <path
                        d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z" />
                </svg>
            </button>
        </div>

    </div>
</template>

<style scoped>
    svg {
        fill: white;
    }
</style>