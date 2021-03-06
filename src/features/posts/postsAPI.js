// @flow
import axios from "axios";
import type { ApiPostParams } from "../../config/types";

/**
 * Make request for Reddit API
 * @param params
 * @returns {Promise<R>}
 */
export function fetchPosts ( params: ApiPostParams ) : Promise<any> {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.reddit.com/r/all/top/.json?t=all&limit=${params.limit}&after=${params.after}`)
            .then(response => {
                console.log(response)
                resolve(response.data.data)
            })
            .catch(reject)
    })
}
