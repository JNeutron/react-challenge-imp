import React from "react";
import {dismissPost, markAsRead} from "./postsSlice";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import red from "@mui/material/colors/red";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {FormatTime} from "../../helpers/datetime";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CardActionArea from "@mui/material/CardActionArea";
import {useDispatch} from "react-redux";
import type {Post} from "../../config/types";

type Props = {
    post: Post,
    index: number,
    visitedPosts: Array
}

const PostCard = (props: Props) => {

    const dispatch = useDispatch()

    const {
        post,
        index,
        visitedPosts
    } = props;

    return (<CardActionArea component="div" onClick={() => dispatch(markAsRead(post.id))}>
        <Card className="post-card">
            <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    { post.author.charAt(0) }
                </Avatar>
                <Stack spacing={0.5} className="post-author">
                    <Typography fontWeight={700}>{ `u/${post.author}` }</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {FormatTime(post.timestamp)}
                    </Typography>
                </Stack>
                <React.Fragment>
                    <IconButton onClick={() => dispatch(dismissPost(index))}>
                        <DeleteIcon sx={{ fontSize: 24 }} />
                    </IconButton>
                </React.Fragment>
            </Box>
            <CardMedia
                component="img"
                image={post.thumbnail}
                alt={post.id}
            />
            <Box sx={{ p: 2 }}>
                <Typography gutterBottom variant="h6" component="h3">
                    { post.title }
                </Typography>
            </Box>
            <Divider />
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
            >
                <Chip label={`${post ? post.num_comments : 0} Comments`} size="small" />
                <Chip
                    label={visitedPosts[post.id] ? 'Readed' : 'Unread'}
                    size="small"
                    color={`${visitedPosts[post.id] ? 'primary' : 'default'}`}
                    icon={visitedPosts[post.id] ? <VisibilityIcon /> : <VisibilityOffIcon/>} />
            </Stack>
        </Card>
    </CardActionArea>)
}

export default PostCard;