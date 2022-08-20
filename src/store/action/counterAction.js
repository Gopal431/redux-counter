export const counterAction = (value) => {
    return {
        type: "INCREMENT",
        payload: value
    }
}

export const decrement = (value) => {
    return {
        type: "DECREMENT",
        payload: value
    }
}