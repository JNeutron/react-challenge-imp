// @flow

export type PostParams = {
    limit: number,
    page: number
}

export type Pagination = {
    pages: Array,
    limit: number,
    current: string
}

export type Post = {
    id: string,
    title: string,
    author: string,
    thumbnail: string,
    timestamp: Date,
    num_comments: number,
    visited: boolean
}