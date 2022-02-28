const key: string = process.env.WEATHER_API_KEY

async function getCoordinatesByLocationName(
    city: String,
    country: String,
    state?: String,
    limit?: Number
) {
    return await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=${limit}&appid=${key}`
    ).then((res) => res.json())
}

module.exports = getCoordinatesByLocationName