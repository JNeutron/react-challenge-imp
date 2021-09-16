import React, {useEffect} from "react";
import {Container} from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Switch from "@mui/material/Switch";
import red from "@mui/material/colors/red";
import CardMedia from "@mui/material/CardMedia";
import DeleteIcon from "@mui/icons-material/Delete";
import PostsPagination from "./Pagination";
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncPosts} from "./postsSlice";
import Skeleton from "@mui/material/Skeleton";
import {FormatTime} from "../../helpers/datetime";

const Posts = () => {

    const { loading, postsList, pagination } = useSelector((state) => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAsyncPosts({
            page: pagination.current
        }))
    }, [dispatch])

    return (
        <Container xs={{ py: 8}} maxWidth="md">
            <Grid container spacing={4}>
                {(loading ? Array.from(new Array(4)) : postsList).map((post, index) => (
                    <Grid item key={index} xs={12} sm={6} md={6}>
                        <Card className="post-card">
                            <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                                { loading ? (
                                    <Skeleton animation="wave" variant="circular" width={40} height={40} />
                                ) : (
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        { post.author.charAt(0) }
                                    </Avatar>
                                )}
                                { loading ? (
                                    <Stack spacing={0.5} className="post-author">
                                        <Skeleton
                                            animation="wave"
                                            height={10}
                                            width="80%"
                                            style={{ marginBottom: 6 }}
                                        />
                                        <Skeleton animation="wave" height={10} width="40%" />
                                    </Stack>
                                ) : (
                                    <Stack spacing={0.5} className="post-author">
                                        <Typography fontWeight={700}>{ `u/${post.author}` }</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {FormatTime(post.timestamp)}
                                        </Typography>
                                    </Stack>
                                )}
                                { loading ? null : (
                                    <div>
                                        <IconButton>
                                            <DeleteIcon sx={{ fontSize: 24 }} />
                                        </IconButton>
                                    </div>
                                )}
                            </Box>
                            {loading ? (
                                <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                            ) : (
                            <CardMedia
                                component="img"
                                image={post.thumbnail}
                                alt={post.id}
                            />)}
                            <Box sx={{ p: 2 }}>
                                { loading ? (
                                    <React.Fragment>
                                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                                        <Skeleton animation="wave" height={10} width="80%" />
                                    </React.Fragment>
                                ) : (
                                    <Typography gutterBottom variant="h6" component="h3">
                                        { post.title }
                                    </Typography>
                                )}
                            </Box>
                            <Divider />
                            <Stack
                                direction="row"
                                alignItems="center"
                                justifyContent="space-between"
                                sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
                            >
                                <Chip label={`${post ? post.num_comments : 0} Comments`} />
                                <Switch />
                            </Stack>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Divider sx={{ mt: 4 }}/>
            <PostsPagination pagination={pagination}/>
        </Container>
    )
}

export default Posts