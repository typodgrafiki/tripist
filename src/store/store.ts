import { configureStore } from "@reduxjs/toolkit"
import { listReducer, listsReducer } from "@/store/slice"

export default configureStore({
    reducer: {
        list: listReducer,
        lists: listsReducer,
    },
})
