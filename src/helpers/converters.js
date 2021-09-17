// @flow
import type {Post} from "../config/types";
import {EpochToDate} from "./datetime";

export const postConverter = (postRawData: Object): Post => {
    return {
        id: postRawData.data.id,
        title: postRawData.data.title,
        author: postRawData.data.author,
        thumbnail: postRawData.data.thumbnail === 'image' || postRawData.data.thumbnail === 'default' ? 'https://thumbs.odir.org/cdn/reddit.com/200.jpeg' : postRawData.data.thumbnail,
        timestamp: EpochToDate(postRawData.data.created_utc),
        num_comments: postRawData.data.num_comments
    }
}