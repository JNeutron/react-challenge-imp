import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#FF4500'
        },
        secondary: {
            main: '#336699'
        },
        error: {
            main: red.A400
        }
    }
})

export default theme