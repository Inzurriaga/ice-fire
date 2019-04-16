import React from "react"
import { mapStateToProps } from "./CardContainer"

describe("CardContainer", () => {
    it("should only return a object of what we need from state", () => {
        const mockState = {
            loading: true,
            houses: [{},{},{}]
        }
        const expected = {
            houses: [{},{},{}]
        }
        const response = mapStateToProps(mockState)
        expect(response).toEqual(expected)
    })
})