<script setup lang="ts">
import MainPage from './pages/MainPage.vue'
</script>

<template>
    <Suspense>
        <MainPage />
    </Suspense>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root {
    --font-size: clamp(1rem, -0.4286rem + 4.5714vw, 3rem);
    --h5-font-size: clamp(1.125rem, -0.2143rem + 4.2857vw, 3rem);
}
#app {
    font-family: Raleway, sans-serif;
    display: grid;
    place-items: center;
}
</style>
