<script setup lang="ts">
import Outfit from '../components/Outfit.vue'
import Weather from '../components/Weather.vue'
import LocationInput from '../components/LocationInput.vue'
</script>

<template>
    <main>
        <div class="header">
            <h1>Umbrella?</h1>
            <div class="avatar">
                <img src="" alt="" />
            </div>
        </div>
        <Outfit />
        <LocationInput />
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
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    background-color: #eee;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
}

@media (min-width: 600px) {
    main {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
    }
    .header {
        grid-area: 1 / 1 / 2 / 3;
        height: 5vh;
    }
    main:nth-child(4) {
        grid-area: 3 / 1 / 4 / 2;
    }
}
</style>
