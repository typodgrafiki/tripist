import { createSlice } from "@reduxjs/toolkit"

export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        id: "",
        name: "Witaj w Triplist 🎉",
        url: "",
        elements: [],
    },
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            // state.title += 1
        },
        decrement: (state) => {
            // state.title -= 1
        },
        incrementByAmount: (state, action) => {
            // state.name += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = todosSlice.actions

export default todosSlice.reducer
