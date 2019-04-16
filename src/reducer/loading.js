export const loading = (state = true, action) => {
    switch(action.type){
        case "LOADING":
            return action.bool;
        default:
            return state;
    }
}