import * as React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => (
    <AppBar position="relative">
        <Toolbar>
            <Typography variant="h6" component="div">
                Reddit Challenge
            </Typography>
        </Toolbar>
    </AppBar>
)

export default Header;