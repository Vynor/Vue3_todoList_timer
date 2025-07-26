<template>
    <div class="todoList">
        <h2>TodoList组件</h2>
        <input type="text" v-model="inputTodo" @keyup.enter="addTodo" placeholder="请输入待办事项，按回车添加">
        <h3>今日清单：</h3>
        <ul>
            <li v-for="todo in todoList" :key="todo.id">
                <h4 :class="{active: todo.done === true}">{{ todo.content }}</h4>
                <div class="btn">
                    <button @click="deleteTodo(todo.id)">删除</button>
                    <button @click="todo.done = !todo.done">完成</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'TodoList'
    }
</script>

<script setup lang="ts">
    import useTodoList from '@/hooks/useTodoList';

    const {inputTodo,todoList,addTodo,deleteTodo} = useTodoList()
</script>

<style scoped>
    input {
        text-align: center;
        width: 200px;
        padding: 5px;
        border-radius: 5px;
        box-shadow: 0 0 1px;
        border: 1px solid #000;
    }
    input:focus{
        outline: 1px solid pink;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
    }
    ul > li {
        display: flex;
        justify-content: space-between;
        position: relative;
        border: 1px solid green;
        border-radius: 5px;
        width: 30%;
        list-style: none;
        margin: 5px 10px;
        padding: 4px;
        background-color: #fff;
    }
    li>h4 {
        flex: 1;
        font-size: 15px;
        margin: 0;
        text-align: center;
        color: #333;
    }
    li>h4.active{
        color: #4caf50;
        text-decoration: line-through;
    }
    .todoList .btn button {
        border: 1px solid green;
        background-color: #ccc;
        margin: 0 5px;
        right: 5px;
        height: 25px;
        width: 50px;
    }
</style>

