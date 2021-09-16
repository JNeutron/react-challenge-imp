import React from "react";
import Box from "@mui/material/Box";
import TablePagination from "@mui/material/TablePagination";
import {Button} from "@mui/material";
import Typography from "@mui/material/Typography";


const Pagination = () => (
    <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography>
            Page 1
        </Typography>
        <Box>
            <Button variant="outlined">
                Prev
            </Button>
            <Button variant="outlined">
                Next
            </Button>
        </Box>
    </Box>
)

export default Pagination