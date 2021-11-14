export default {
    setState(state: any, data: any) {
        for (const item in data) {
            if (Object.prototype.hasOwnProperty.call(data, item)) {
                state[item] = data[item]
            }
        }
    }
}