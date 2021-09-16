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
import red from "@mui/material/colors/red";
import CardMedia from "@mui/material/CardMedia";
import DeleteIcon from "@mui/icons-material/Delete";
import PostsPagination from "./Pagination";
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncPosts, markAsRead, dismissPost} from "./postsSlice";
import Skeleton from "@mui/material/Skeleton";
import {FormatTime} from "../../helpers/datetime";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CardActionArea from "@mui/material/CardActionArea";

const Posts = () => {

    const { loading, postsList, visitedPosts, pagination } = useSelector((state) => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAsyncPosts({
            page: pagination.current
        }))
    }, [dispatch, pagination])

    return (
        <Container xs={{ py: 8}} maxWidth="md">
            { loading || postsList.length > 0 ? (<Grid container spacing={4}>
                {(loading ? Array.from(new Array(4)) : postsList).map((post, index) => (
                    <Grid item key={index} xs={12} sm={6} md={6}>
                        <CardActionArea component="div" onClick={() => dispatch(markAsRead(post.id))}>
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
                                            <IconButton onClick={() => dispatch(dismissPost(index))}>
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
                                    <Chip label={`${post ? post.num_comments : 0} Comments`} size="small" />
                                    { loading ? null : (
                                        <Chip
                                            label={visitedPosts[post.id] ? 'Readed' : 'Unread'}
                                            size="small"
                                            color={`${visitedPosts[post.id] ? 'primary' : 'default'}`}
                                            icon={visitedPosts[post.id] ? <VisibilityIcon /> : <VisibilityOffIcon/>} />
                                    )}
                                </Stack>
                            </Card>
                        </CardActionArea>
                    </Grid>
                ))}
            </Grid> ) : (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img src="https://cdn.dribbble.com/users/888330/screenshots/2653750/media/b7459526aeb0786638a2cf16951955b1.png"/>
                </Box>
            ) }
            <Divider sx={{ mt: 4 }}/>
            <PostsPagination pagination={pagination}/>
        </Container>
    )
}

export default Posts