// @flow

export type PostParams = {
    limit: number,
    page: number
}

export type ApiPostParams = {
    limit: number,
    after: string
}

export type Pagination = {
    pages: Array<string>,
    limit: number,
    current: number
}

export type Post = {
    id: string,
    title: string,
    author: string,
    thumbnail: string,
    timestamp: Date,
    num_comments: number
}