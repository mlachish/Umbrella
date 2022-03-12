<script setup lang="ts">
import { getCoordinatesByLocationName } from '../services/coordinates-by-location-name'
import { getCurrentWeather } from '../services/current-weather'

const { lat, lon } = await getCoordinatesByLocationName('london', 'united kingdom')
const currentWeather = await getCurrentWeather(lat, lon)
console.log(currentWeather)

const temp: string = currentWeather.main.temp.toString().split('.')[1].length === 2 ? currentWeather.main.temp.toString().slice(0, -1) : currentWeather.main.temp.toString()

const iconCode: string = currentWeather.weather[0].icon
function getWeatherIcon(iconCode: string) {
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`
}
</script>

<template>
    <section>
        <h5 v-if="currentWeather">{{ currentWeather.name }}</h5>
        <img :src="getWeatherIcon(iconCode)" alt="weather icon" />
        <p class="temp" v-if="temp">{{ temp }}&#176 C</p>
        <p class="description" v-if="currentWeather">
            {{ currentWeather.weather[0].description }}
        </p>
    </section>
</template>

<style scoped>
section {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    padding: 0.5rem;
    font-size: 24px;
    background-color: #eee;
    border-radius: 10px;
    width: 60vw;
    height: 20vh;
    overflow: hidden;
}
h5 {
    grid-area: 1 / 1 / 2 / 6;
    font-size: var(--h5-font-size);
}
img {
    grid-area: 2 / 1 / 4 / 2;
    background-color: #ccc;
    height: 90px;
    width: 90px;
    border-radius: 50%;
}
.temp {
    grid-area: 2 / 2 / 3 / 4;
    font-size: var(--font-size);
}
.description {
    grid-area: 3 / 2 / 4 / 4;
    font-size: var(--font-size);
    word-wrap: break-word;
}
</style>
