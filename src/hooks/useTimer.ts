import { MAX } from 'uuid'
import {computed, onUnmounted, ref, watch} from 'vue'

export function useTimer(val:number){
    //数据
    let count = ref(0)
    let startCount = ref(false)
    let timerId: number | null = null

    //时间
    let time = computed<string>(()=>{
        const hours = Math.floor(count.value / 3600)
        const minutes = Math.floor(count.value / 60 % 60)
        const seconds = Math.floor(count.value % 60)

        const pad = (num:number) => String(num).padStart(2,'0')

        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
    })

    //方法
    function startTime(){
        if (!startCount.value && timerId === null){
            startCount.value = true
            timerId = setInterval(()=>{
                count.value += 1
            }, val)
        }
    }
    function pauseTime(){
        if (timerId !== null){
            clearInterval(timerId)
            timerId = null
            startCount.value = false
        }
    }
    function resetTime(){
        pauseTime()
        count.value = 0
    }

    const saveMaxTime = localStorage.getItem('maxTime') || '00:00:00'
    let maxTime = ref(saveMaxTime)

    watch(maxTime, (newVal) => {
        localStorage.setItem('maxTime',newVal)
    })

    function updateMaxTime(){
        if (time.value > maxTime.value){
            maxTime.value = time.value
        }
    }

    onUnmounted(()=>{
        pauseTime()
        console.log('Timer组件卸载完成')
    })

    return {
        time,
        startCount,
        maxTime,
        startTime,
        pauseTime,
        resetTime,
        updateMaxTime
    }
}