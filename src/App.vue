<template>
    <h1>欢迎来到xxx</h1>
    <div class="app">
        <div class="navigate">
            <h2>导航页</h2>
            <ul>
                <li><RouterLink to="/home" active-class="active">首页</RouterLink></li>
                <li><RouterLink to="/timer" active-class="active">计时器</RouterLink></li>
                <li><RouterLink to="/about" active-class="active">关于</RouterLink></li>
                <li><RouterLink to="/">..</RouterLink></li>
            </ul>
        </div>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name:'App'
    }
</script>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<style scoped>
    h1 {
        margin-top: 10px;
        margin-bottom: 40px;
        text-align: center;
        letter-spacing: 10px;
        font-size: 30px;
    }
    .app {
        display: flex;
        background-color: #ddd;
        border-radius: 10px;
        padding: 40px 10%;
        padding-bottom: 100px;
    }
    .navigate {
        display: flex;
        justify-content: center;
        flex-direction: column;
        background-color: #ddd;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
        font-size: 25px;
    }
    .navigate h2 {
        text-align: center;
        font-weight: 400;
        font-size: 30px;
        margin: 10px;
    }
    .navigate ul{
        padding: 0;
    }
    .navigate li {
        background-color: skyblue;
        list-style: none;
        text-align: center;
        margin: 10px;
        box-shadow: 0 0 5px;
        border-radius: 5px;
    }
    .navigate a {
        display: block;
        text-decoration: none;
        padding: 10px;
        color: black;
    }
    .navigate a.active {
        color: #6739b6;
    }
    .content {
        margin-left: 5%;
        flex:1;
        box-shadow: 0 0 2px;
        border-radius: 2px;
        padding: 20px;
    }
</style>