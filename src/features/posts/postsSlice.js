// @flow
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {Pagination, Post, PostParams} from "../../config/types";
import {fetchPosts} from "./postsAPI";
import {postConverter} from "../../helpers/converters";


const initialState : {
    loading: boolean,
    postsList: Array<Post>,
    visitedPosts: Object,
    pagination: Pagination,
    hasError: boolean
} = {
    loading: false,
    postsList: [],
    visitedPosts: {},
    pagination: {
        pages: [null],
        limit: 10,
        current: 1
    },
    hasError: false
}

export const fetchAsyncPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (params : PostParams, { getState, rejectWithValue }) : { postList: Array, after: string, current: number } => {
        const state = getState()

        try {
            const res = await fetchPosts({
                limit: state.posts.pagination.limit,
                after: state.posts.pagination.pages[params.page - 1]
            })
            return {
                postsList: res.children.map(postConverter),
                after: res.after,
                current: params.page
            }
        } catch (err) {
            console.log(err)
            rejectWithValue(err.response.data)
        }
    }
)

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        /**
         * Mark a entry as read and keep in state
         * @param state
         * @param action
         */
        markAsRead: (state, action) => {
            state.visitedPosts[action.payload] = 1
        },
        /**
         * Dismiss one post
         * @param state
         * @param action
         */
        dismissPost: (state, action) => {
            state.postsList.splice(action.payload, 1)
        },
        /**
         * Dismiss all posts
         * @param state
         * @param action
         */
        dismissAllPosts: (state, action) => {
            state.postsList = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncPosts.pending, (state) => {
                state.loading = true
                state.postsList = []
            })
            .addCase(fetchAsyncPosts.fulfilled, (state, action) => {
                state.postsList = action.payload.postsList
                state.pagination.pages[action.payload.current] = action.payload.after
                state.pagination.current = action.payload.current
                state.loading = false
            })
            .addCase(fetchAsyncPosts.rejected, (state, action) => {
                state.hasError = true
            })
    }
})

export const { markAsRead, dismissPost, dismissAllPosts } = postsSlice.actions

export default postsSlice.reducer
