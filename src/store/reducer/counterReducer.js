const initialValues = 1;

const counterReducer = (state = initialValues, action) => {
    console.log("reducer", action)
    // console.log("reducer");
    switch (action.type) {

        case "INCREMENT": return state + action.payload;

        case 'DECREMENT': return state - action.payload;

        default: return state;
    }
}
export default counterReducer;