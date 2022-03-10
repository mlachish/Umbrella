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
        <Suspense>
            <Weather />
        </Suspense>
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
    top: 1.5rem;
    left: 1.5rem;
    background-color: black;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
}
</style>
