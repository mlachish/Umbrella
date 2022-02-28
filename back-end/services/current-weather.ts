const key: string = process.env.WEATHER_API_KEY

async function getCurrentWeather(lat: Number, lon: Number) {
    return await fetch(
        `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
    ).then((res) => res.json())
}

module.exports = getCurrentWeather