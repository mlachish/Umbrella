import { defineStore } from 'pinia'
import { Weather } from '../interfaces/weather-interface'

export const useWeatherStore = defineStore('weatherStore', {
    state: (): Weather => ({
        coord: {
            lon: -122.08,
            lat: 37.39,
        },
        weather: [
            {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
            },
        ],
        base: 'stations',
        main: {
            temp: 282.55,
            feels_like: 281.86,
            temp_min: 280.37,
            temp_max: 284.26,
            pressure: 1023,
            humidity: 100,
        },
        visibility: 16093,
        wind: {
            speed: 1.5,
            deg: 350,
        },
        clouds: {
            all: 1,
        },
        dt: 1560350645,
        sys: {
            type: 1,
            id: 5122,
            message: 0.0139,
            country: 'US',
            sunrise: 1560343627,
            sunset: 1560396563,
        },
        timezone: -25200,
        id: 420006353,
        name: 'Mountain View',
        cod: 200,
    }),
    getters: {
        weatherInfo(state) {
            return state.weather
        },
        tempratures(state) {
            return state.main
        }
        // tempratures(state): any {
        //     Object.entries(state.main).map((entry) => {
        //         if (entry[1] % 1 != 0) {
        //             if (entry[1].toString().split('.')[1].length === 2) {
        //                 entry[1].toString().slice(0, -1)
        //             } else {
        //                 entry[1].toString()
        //             }
        //             entry.reduce((a, v) => ({ ...a, [v]: v}), {})
        //             return entry
        //         } else {
        //             return entry
        //         }
        //     })
        // },
    },
    //   actions: {
    //     // any amount of arguments, return a promise or not
    //     addTodo(text) {
    //       // you can directly mutate the state
    //       this.todos.push({ text, id: this.nextId++, isFinished: false })
    // //     },
    //   },
})
