const key = import.meta.env.VITE_API_WEATHER_API_KEY

export async function getCurrentWeather(lat: Number, lon: Number) {
    return await fetch(
        `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
    ).then((res) => res.json())
}
