// @flow
import { createSlice } from "@reduxjs/toolkit";
import type { Pagination, Post } from "../../config/types";


const initialState : {
    loading: boolean,
    postsList: Array<Post>,
    pagination: Pagination
} = {
    loading: false,
    postsList: [],
    pagination: {
        pages: [null],
        limit: 3,
        current: 1
    }
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        // Logic
    }
})

//
export const selectPosts = (state) => state.posts.postsList

export default postsSlice.reducer
