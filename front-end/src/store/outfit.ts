import { defineStore } from 'pinia'
import { Outfit } from '../types/outfit-interface'

export const useOutfitStore = defineStore('outfitStore', {
    state: () => ({
        outfits: [
            {
                name: 't-shirt',
                minTempRangeC: 20,
                minTempRangeF: 68,
                maxTempRangeC: 60,
                maxTempRangeF: 140,
                icon: 't-shirt',
                position: 'top',
                layer: '1',
                id: 1
            }

        ]
    }),
    actions: {
        getOutfitByTemp(temp: number){
            const outfit = this.outfits.map((item) => {
                if(item.minTempRangeC <= temp && item.maxTempRangeC >= temp) {
                    return item
                }
            })
            return outfit
        }
    }
})
