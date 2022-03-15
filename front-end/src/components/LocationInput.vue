<script setup lang="ts">
import { ref } from 'vue'
import { getCoordinatesByLocationName } from '../services/coordinates-by-location-name'
import { getCurrentWeather } from '../services/current-weather'
import { useWeatherStore } from '../store/weather'

const store = useWeatherStore()
const city = ref<string>('')
const state = ref()
const country = ref<string>('')

const updateLocation = async () => {
    const { lat, lon } = await getCoordinatesByLocationName(
        city.value,
        country.value,
        state.value
    )
    const currentWeather = await getCurrentWeather(lat, lon)
    store.$patch(currentWeather)
    console.log(currentWeather)
}
</script>

<template>
    <form class="location" @submit.prevent="updateLocation">
        <h5>Search Location</h5>
        <label>City<input v-model="city" required /></label>
        <label>State (Only in US)<input v-model="state" /></label>
        <label>Country<input v-model="country" required /></label>
        <button type="submit">OK</button>
    </form>
</template>

<style scoped>
form {
    display: grid;
    place-items: center;
    font-size: var(--font-size);
    width: 60vw;
    padding: 1rem;
    gap: 0.5rem;
    background-color: #eee;
    border-radius: 10px;
}
input {
    width: 100%;
    line-height: 1.25rem;
    padding: 0 0.2rem;
    font-family: Raleway, sans-serif;
}
button {
    width: 50%;
    line-height: 1.25rem;
    background-color: #fff;
    border: 1px solid rgb(118, 118, 118);
    border-radius: 5px;
}
@media (min-width: 600px) {
    form {
        grid-area: 2 / 1 / 3 / 2;
        width: inherit;
    }
}
</style>
