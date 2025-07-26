<template>
    <h2>Timer组件</h2>
    <div class="timer">
        <h2>{{ time }}</h2>
        <div class="btn">
            <button @click="startTime" :disabled="startCount">Start</button>
            <button @click="pauseTime" :disabled="!startCount">Pause</button>
            <button @click="resetTime">Reset</button>
        </div>
    </div>
    <div class="history">
        <p>MAXTIME：{{ maxTime }}</p>
        <button @click="updateMaxTime">Update</button>
    </div>
</template>

<script lang="ts">
    export default {
        name:'Timer'
    }
</script>

<script lang="ts" setup>
    import { useTimer } from '@/hooks/useTimer';
    
    const {time,startCount,maxTime,startTime,pauseTime,resetTime,updateMaxTime} = useTimer(1000)
</script>

<style scoped>
    .timer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 40px;
    }
    .timer h2 {
        font-size: 50px;
        letter-spacing: 1px;
    }
    .btn button {
        margin: 5px;
        font-size: 20px;
        padding: 5px;
        border-radius: 5px;
        box-shadow: 0 0 1px;
        border: 1px solid #000;
    }
    button:active {
        transform: scale(0.95);
        background-color: #2ecc71;
    }
    .history button, p {
        margin: 0;
    }
</style>