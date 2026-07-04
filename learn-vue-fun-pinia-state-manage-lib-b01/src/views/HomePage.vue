<template>
    <div>
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
import { onMounted } from 'vue';

    const counterStore = useCounterStore();

    const {
        count,
        doubleCount,
    } = storeToRefs(counterStore);

    const {
        increment,
        decrement
    } = counterStore;

    const postStore02 = usePostsStore02();

    const incrementCounter = () => {
        counterStore.increment();
    }

    onMounted(async () => {
        postStore02.fetchPostData();
    })

</script>