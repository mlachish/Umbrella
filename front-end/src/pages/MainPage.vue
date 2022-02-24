<script setup lang="ts">
import Outfit from '../components/Outfit.vue'
import Weather from '../components/Weather.vue'
</script>

<template>
    <main>
        <h1>Logo</h1>
        <div class="avatar">
            <img src="" alt="">
        </div>
        <Outfit />
        <Weather />
    </main>
</template>

<style scoped>
main {
    display: grid;
    place-items: center;
    gap: 2rem;
}

h1 {
    margin-top: 1rem;
}

.avatar {
    position: fixed;
    top: 2rem;
    left: 2rem;
    background-color: black;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
}
</style>
