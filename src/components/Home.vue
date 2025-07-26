<template>
    <h2>Home组件</h2>
    <div class="home">
        <TodoList/>
    </div>
</template>

<script lang="ts">
    export default {
        name:'Home'
    }
</script>

<script setup lang="ts">    
    import TodoList from '@/components/TodoList.vue';
</script>

<style scoped>
</style>