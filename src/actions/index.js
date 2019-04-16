export const saveHouses = (houses) => ({
    type: "SAVE_HOUSES",
    houses
})

export const displayLoading = (bool) => ({
    type: "LOADING",
    bool
})