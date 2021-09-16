import React from "react";
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

const posts = [1,2,3,4,5,6]

const Posts = props => {

    return (
        <Container xs={{ py: 8}} maxWidth="md">
            <Grid container spacing={4}>
                {posts.map((post) => (
                    <Grid item key={post} xs={12} sm={6} md={6}>
                        <Card className="post-card">
                            <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    M
                                </Avatar>
                                <Stack spacing={0.5} className="post-author">
                                    <Typography fontWeight={700}>Michael Scott</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                         Scranton, PA
                                    </Typography>
                                </Stack>
                                <div>
                                    <IconButton>
                                        <DeleteIcon sx={{ fontSize: 24 }} />
                                    </IconButton>
                                </div>
                            </Box>
                            <CardMedia
                                component="img"
                                image="https://source.unsplash.com/random"
                                alt="random"
                            />
                            <Box sx={{ p: 2, display: 'flex' }}>
                                <Typography gutterBottom variant="h6" component="h3">
                                    Post title
                                </Typography>
                            </Box>
                            <Divider />
                            <Stack
                                direction="row"
                                alignItems="center"
                                justifyContent="space-between"
                                sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
                            >
                                <Chip label="20 Comments" />
                                <Switch />
                            </Stack>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <PostsPagination />
        </Container>
    )
}

export default Posts