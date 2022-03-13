export function removeLastDecimal(number: number): string {
    return number.toString().split('.')[1].length === 2 ? number.toString().slice(0, -1) : number.toString()
}