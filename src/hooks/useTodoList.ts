import { ref,reactive, watch} from 'vue';
import { nanoid } from 'nanoid';
import type { todoInter } from '@/types';

export default function(){
    let inputTodo = ref<string|null>(null)

    const STORAGE_KEY = 'my_todo_list'

    function loadTodos() {
        const json = localStorage.getItem(STORAGE_KEY)
        if (json) {
            try {
                return JSON.parse(json)
            } catch {
                return []
            }
        }
        return []
    }

    const todoList = reactive<Array<todoInter>>(loadTodos())

    //添加清单
    function addTodo(){
        const val = inputTodo.value?.trim() //防止空格输入
        if (val){
            todoList.push({id:nanoid(),content:val,done:false})
            inputTodo.value = null
        }
    }

    //删除清单
    function deleteTodo(id:string){
        todoList.splice(0, todoList.length, ...todoList.filter(item => item.id !== id))
    }

    watch(
        todoList,
        (newVal) => {
            localStorage.setItem(STORAGE_KEY,JSON.stringify(newVal))
        }
    )

    return {
        inputTodo,
        todoList,
        addTodo,
        deleteTodo
    }
}