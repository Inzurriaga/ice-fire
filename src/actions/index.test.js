import React from "react"
import { saveHouses, displayLoading } from "./index"

describe("actions", () => {
    it("should take in the savehouse argument and add the type", () => {
        const response = saveHouses([{},{},{}])
        const expected = {
            type: "SAVE_HOUSES",
            houses: [{},{},{}]
        }
        expect(response).toEqual(expected)
    })
    it("should take in the displayLoading argument and add the type", () => {
        const response = displayLoading(false)
        const expected = {
            type: "LOADING",
            bool: false
        }
        expect(response).toEqual(expected)
    })
})