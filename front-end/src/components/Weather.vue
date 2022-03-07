<script setup lang="ts">
import { getCoordinatesByLocationName } from '../services/coordinates-by-location-name'
import { getCurrentWeather } from '../services/current-weather'

const { lat, lon } = await getCoordinatesByLocationName('jerusalem', 'israel')
console.log(lat, lon)
const jerusalemWeather = await getCurrentWeather(lat, lon)
console.log(jerusalemWeather)
</script>

<template>
    <p>weather</p>
</template>

<style scoped>
p {
    font-size: 24px;
    border: 1px solid black;
    width: 50vw;
    height: 20vh;
    text-align: center;
}
</style>
