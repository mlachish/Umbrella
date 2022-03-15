const key = import.meta.env.VITE_API_WEATHER_API_KEY
export async function getCurrentWeather(lat: number, lon: number) {
    return await fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
    ).then((res) => res.json())
}
