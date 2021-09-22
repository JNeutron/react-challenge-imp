import React, {useEffect} from "react";
import {Container} from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import PostsPagination from "./Pagination";
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncPosts, dismissAllPosts} from "./postsSlice";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import PostCard from "./PostCard";
import EmptyData from "../../components/EmptyData";
import PostCardSkeleton from "./PostCardSkeleton";

const Posts = () => {

    const { loading, postsList, visitedPosts, pagination, hasError } = useSelector((state) => state.posts)
    const dispatch = useDispatch()

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        dispatch(fetchAsyncPosts({
            page: pagination.current
        }))
    }, [dispatch])

    return (
        <Container xs={{ py: 8}} maxWidth="md">
            { hasError ? (
                <Alert sx={{ mb: 4 }} severity="error">
                    <AlertTitle>Error</AlertTitle>
                    Something went wrong. Please refresh this page.
                </Alert>
            ) : null }
            { loading || postsList.length > 0 ? (<Grid container spacing={4}>
                {(loading ? Array.from(new Array(pagination.limit)) : postsList).map((post, index) => (
                    <Grid item key={index} xs={12} sm={6} md={6}>
                        { loading ?
                            <PostCardSkeleton />
                            : <PostCard post={post} index={index} visitedPosts={visitedPosts} />
                        }
                    </Grid>
                ))}
            </Grid> ) : (
                <EmptyData />
            ) }
            <Divider sx={{ mt: 4 }}/>
            { postsList.length > 0 ? (
                <React.Fragment>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="text" color="error" onClick={() => dispatch(dismissAllPosts())}>
                            Dismiss all
                        </Button>
                    </Box>
                    <Divider/>
                </React.Fragment>
            ) : null }
            <PostsPagination pagination={pagination}/>

        </Container>
    )
}

export default Posts