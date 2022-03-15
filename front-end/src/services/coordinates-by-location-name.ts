const key = import.meta.env.VITE_API_WEATHER_API_KEY

let lon: number, lat: number, query: string
export async function getCoordinatesByLocationName(
    city: string,
    country: string,
    state?: string | undefined
) {
    if (state !== undefined) {
        query = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&appid=${key}`
    } else {
        query = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=${key}`
    }
    const res = await fetch(query).then((res) => res.json())
    res.map((i: { lon: number; lat: number }) => {
        lon = i.lon
        lat = i.lat
    })
    return { lat, lon }
}
