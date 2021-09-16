import postsRedurcer, {
    markAsRead,
    dismissPost,
    dismissAllPosts
} from "./postsSlice";

describe('posts reducer', () => {
    const initialState = {
        loading: false,
        postsList: [
            {
                author: "springfart",
                id: "a1yofz",
                num_comments: 2204,
                thumbnail: "https://a.thumbs.redditmedia.com/8nNuA-krg8irEeJIcGxGEErl8aHkF2Fbn8uQoncldi8.jpg",
                timestamp: (new Date()),
                title: "I got off the horse by accident right before a cutscene in red dead",
            },
            {
                author: "hoosakiwi",
                id: "j3oj21",
                num_comments: 33805,
                thumbnail: "https://thumbs.odir.org/cdn/reddit.com/200.jpeg",
                timestamp: (new Date()),
                title: "President Donald Trump says he has tested positive for coronavirus"
            }
        ],
        visitedPosts: {
            "a1yofz": 1
        },
        pagination: {
            pages: [null, "j3oj21"],
            limit: 10,
            current: 2
        },
        hasError: false
    }

    it("should handle initial state", () => {
        expect(postsRedurcer(undefined, { type: 'unknown' })).toEqual({
            loading: false,
            postsList: [],
            visitedPosts: {},
            pagination: {
                pages: [null],
                limit: 10,
                current: 1
            },
            hasError: false
        })
    })

    it('should handle mark as read', () => {
        const actual = postsRedurcer(initialState, markAsRead('j3oj21'))
        expect(actual.visitedPosts['j3oj21']).toEqual(1)
    })

    it('should handle dismiss a post', () => {
        const actual = postsRedurcer(initialState, dismissPost(2))
        expect(actual.postsList.length).toEqual(1)
    })

    it('should handle dismiss all posts', () => {
        const actual = postsRedurcer(initialState, dismissAllPosts())
        expect(actual.postsList.length).toEqual(0)
    })
})