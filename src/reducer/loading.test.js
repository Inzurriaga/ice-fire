import React from "react"
import { loading } from "./loading"

describe("Loading", () => {
    it("should have a default state", () => {
        const arg = {
            type: "DEFUALT", 
            bool: false
        }
        const response = loading(undefined, arg)
        const expected = true
        expect(response).toEqual(expected)
    })
    it("should change state to the argument when type match", () => {
        const arg = {
            type: "LOADING", 
            bool: false
        }
        const response = loading(undefined, arg)
        const expected = false
        expect(response).toEqual(expected)
    })
})