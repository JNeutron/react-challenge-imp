import React from "react";
import Box from "@mui/material/Box";
import {Button} from "@mui/material";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import type { Pagination as PaginationType } from "../../config/types";
import {useDispatch} from "react-redux";
import {fetchAsyncPosts} from "./postsSlice";

type Props = {
    pagination: PaginationType
}

const Pagination = (props: Props) => {

    const {
        pagination
    } = props;

    const dispatch = useDispatch()

    const goToPage = (page : number) => {
        dispatch(fetchAsyncPosts({
            limit: pagination.limit,
            page: page
        }))
        window.scrollTo(0,0)
    }

    return (
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography>
                Page { pagination.current } of ∞
            </Typography>
            <Stack spacing={2} direction="row">
                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIosIcon/>}
                    disabled={(pagination.current - 1) < 1}
                    onClick={() => goToPage(pagination.current - 1)}
                >
                    Prev
                </Button>
                <Button
                    variant="outlined"
                    endIcon={<ArrowForwardIosIcon/>}
                    onClick={() => goToPage(pagination.current + 1)}
                >
                    Next
                </Button>
            </Stack>
        </Box>
    )
}

export default Pagination
