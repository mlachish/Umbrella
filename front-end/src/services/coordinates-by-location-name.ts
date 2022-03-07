const key = import.meta.env.VITE_API_WEATHER_API_KEY

let lon: Number, lat: Number, query: string
export async function getCoordinatesByLocationName(
    city: String,
    country: String,
    state?: String
) {
    if (state !== undefined) {
        query = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&appid=${key}`
    } else {
        query = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=${key}`
    }

    const res = await fetch(query).then((res) => res.json())
    res.map((i: { lon: Number; lat: Number }) => {
        lon = i.lon
        lat = i.lat
    })
    return { lat, lon }
}
