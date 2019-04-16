export const houses = (state = [], action) => {
    switch(action.type){
        case "SAVE_HOUSES":
            return action.houses;
        default:
            return state;
    }
}