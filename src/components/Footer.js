import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";


const Copyright = () => (
    <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
            Iván Molina Pavana
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
)

const Footer = () => (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
            plataforma.io
        </Typography>
        <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
        >
            Reach Challenge
        </Typography>
        <Copyright />
    </Box>
)

export default Footer