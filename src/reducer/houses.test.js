import React from "react"
import { houses } from "./houses"

describe("Loading", () => {
    it("should have a default state", () => {
        const arg = {
            type: "DEFUALT", 
            houses: [{},{},{}]
        }
        const response = houses(undefined, arg)
        const expected = []
        expect(response).toEqual(expected)
    })
    it("should change state to the argument when type match", () => {
        const arg = {
            type: "SAVE_HOUSES", 
            houses: [{},{},{}]
        }
        const response = houses(undefined, arg)
        const expected = [{},{},{}]
        expect(response).toEqual(expected)
    })
})