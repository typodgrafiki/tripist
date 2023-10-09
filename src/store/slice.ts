import { createSlice } from "@reduxjs/toolkit"

export const listSlice = createSlice({
    name: "list",
    initialState: {
        id: "",
        name: "Witaj w Triplist 🎉",
        url: "",
        elements: [],
    },
    reducers: {
        setList: (state, action) => {
            return { ...state, ...action.payload }
        },
    },
})

export const listsSlice = createSlice({
    name: "lists",
    initialState: {
        elements: [
            {
                id: "lolololo1",
                name: "nameee1",
                url: "url1",
            },
            {
                id: "lolololo2",
                name: "nameee2",
                url: "url2",
            },
        ],
    },
    reducers: {
        setLists: (state, action) => {
            return {
                ...state,
                elements: action.payload,
            }
            // return (state.elements = action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { setList } = listSlice.actions
export const { setLists } = listsSlice.actions

export const listReducer = listSlice.reducer
export const listsReducer = listsSlice.reducer
