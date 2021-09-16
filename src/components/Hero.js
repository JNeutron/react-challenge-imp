import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import logo from '../logo.svg';

const Hero = () => (
    <Box
        sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6
        }}
    >
        <Container maxWidth="sm">
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
            >
                <img src={logo} className="App-logo" alt="logo" height={60} /> Reddit
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                A Reddit client that shows the top 50 entries from Reddit.
            </Typography>
        </Container>
    </Box>
)

export default Hero;
