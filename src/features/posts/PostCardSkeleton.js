import React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";

const PostCardSkeleton = () => (
    <Card className="post-card">
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
            <Skeleton animation="wave" variant="circular" width={40} height={40} />
            <Stack spacing={0.5} className="post-author">
                <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                />
                <Skeleton animation="wave" height={10} width="40%" />
            </Stack>
        </Box>
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
        <Box sx={{ p: 2 }}>
            <React.Fragment>
                <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                <Skeleton animation="wave" height={10} width="80%" />
            </React.Fragment>
        </Box>
        <Divider />
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
        >
            <Chip label={`0 Comments`} size="small" />
        </Stack>
    </Card>
)

export default PostCardSkeleton