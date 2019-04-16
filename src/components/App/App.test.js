import React from "react"
import { mapStateToProps, mapDispatchToProps} from "./App"
import { saveHouses, displayLoading  } from "../../actions/index"

describe("App", () => {
    describe("mapDispatchToProps", () => {
        it("should call dispatch with saveHouse", () => {
            const mockDispatch = jest.fn()
            const actionToDispatch = saveHouses([{},{},{}])
            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.saveHouses([{},{},{}])
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
        })
        it("should call dispatch with displayLoading", () => {
            const mockDispatch = jest.fn()
            const actionToDispatch = displayLoading(false)
            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.displayLoading(false)
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
        })
    })
    describe("mapStateToProps", () => {
        it("should only return a object of what we need from state", () => {
            const mockState = {
                loading: true,
                houses: [{},{},{}]
            }
            const expected = {
                loading: true
            }
            const response = mapStateToProps(mockState)
            expect(response).toEqual(expected)
        })
    })
})