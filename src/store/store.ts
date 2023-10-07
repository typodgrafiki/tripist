import { configureStore } from "@reduxjs/toolkit"
import todosReducer from "@/store/slice"

export default configureStore({
    reducer: {
        todos: todosReducer,
    },
})
