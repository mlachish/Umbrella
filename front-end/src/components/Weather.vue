<script setup lang="ts">
import { getCoordinatesByLocationName } from '../services/coordinates-by-location-name'
import { getCurrentWeather } from '../services/current-weather'

const { lat, lon } = await getCoordinatesByLocationName('new york', 'united states')
console.log(lat, lon)
const cityWeather = await getCurrentWeather(40.7127281, -74.0060152)
console.log(cityWeather)
</script>

<template>
    <section>
        <p v-if="lat">{{ lat }}, {{ lon }}</p>
        <p v-if="cityWeather">{{cityWeather}}</p>
    </section>
</template>

<style scoped>
section {
    font-size: 24px;
    border: 1px solid black;
    width: 60vw;
    height: 20vh;
    text-align: center;
}
</style>
