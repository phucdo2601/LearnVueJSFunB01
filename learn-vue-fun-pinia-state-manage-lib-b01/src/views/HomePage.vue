<template>
    <div>
        <h1>Test count val using ref: {{ countValue }} - {{ name }}</h1>

        <div class="">
            <button @click="updateUserInputName">Update Input name</button>
        </div>

        <Counter1/>

        <h1>Home Page</h1>
        <div class="">
            {{ count }}
        </div>

        <div class="">
            <h1>Double Count:</h1> {{ doubleCount }}
        </div>

        <button @click="increment">increment</button>
        <button @click="decrement">decrement</button>

       <div class="">
         <h1>Posts</h1>
         {{ postStore02.posts }}
       </div>

       
    </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
import { usePostsStore02 } from '@/stores/posts2';
import { storeToRefs } from 'pinia';
import { onMounted, reactive, toRef, toRefs } from 'vue';
import Counter1 from './components/Counter1.vue';
import { provide } from 'vue';

    const counterStore = useCounterStore();
    
    const {
        count,
        doubleCount,
    } = storeToRefs(counterStore);

    const countValue = toRef(counterStore, 'count');

    const userInput = reactive({
        name: "ben",
        gender: "male"
    })

    const { name, gender } = toRefs(userInput);

    const updateUserInputName = () => {
        userInput.name = "Phucdn"
        console.log(counterStore.secret);
        console.log(counterStore.hello);
        
    }

    const {
        increment,
        decrement
    } = counterStore;

    provide('counterStore', counterStore);

    const postStore02 = usePostsStore02();

    const incrementCounter = () => {
        counterStore.increment();
    }

    onMounted(async () => {
        postStore02.fetchPostData();
    })

</script>