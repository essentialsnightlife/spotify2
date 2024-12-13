/*
=========================================================
* Material Kit 2 PRO React - v2.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// LoginPage page sections
import Testimonials from "components/Pages/LoginPage/sections/Testimonials";
import Faq from "components/Pages/LoginPage/sections/Faq";
import Contact from "components/Pages/LoginPage/sections/Contact";
import TriviaCarousel from "components/Pages/LoginPage/sections/TriviaCarousel.jsx";

// Routes
import routes from "@/routes";
import footerRoutes from "@/footer.routes";

// Images
import bgImage from "assets/images/bg-rental.jpeg";
import vibrantMusicFestival from "/vibrantMusicFestival.jpg";
import Stack from "@mui/material/Stack";
import MKButton from "components/MKButton/index";
import VisualTeasers from "components/Pages/LoginPage/sections/VisualTeasers.jsx";

function LoginPage({onClick}) {

    return (
        <>
            <DefaultNavbar
                brand="Your Spotify Stats | Free from DJ Eds D1"
                routes={[]}
                action={{
                    type: "external",
                    onClick: () => onClick(),
                    label: "spotify connect",
                    color: "success",
                }}
                transparent
                light
            />
            <MKBox
                minHeight="50vh"
                width="100%"
                sx={{
                    backgroundImage: ({
                                          functions: {linearGradient, rgba},
                                          palette: {gradients},
                                      }) =>
                        `${linearGradient(
                            rgba(gradients.dark.main, 0.7), // Update opacity here
                            rgba(gradients.dark.state, 1.5) // Update opacity here
                        )}, url(${vibrantMusicFestival})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <Container>
                    <Grid
                        container
                        item
                        xs={12}
                        lg={8}
                        justifyContent="center"
                        sx={{mx: "auto", textAlign: "center"}}
                    >
                        <MKTypography
                            variant="h2"
                            color="white"
                            sx={({breakpoints, typography: {size}}) => ({
                                [breakpoints.down("md")]: {
                                    fontSize: size["3xl"],
                                },
                            })}
                        >
                            Welcome to Your Spotify Stats
                        </MKTypography>
                        <MKTypography variant="body1" color="white" mt={1}>
                            Tell your musical stories with this free tool. You can view your top artists and most played
                            tracks on Spotify for different time ranges.
                        </MKTypography>
                        <Stack direction="row" spacing={1} mt={6} mb={3}>
                            <MKButton variant="gradient" color="success">
                                Login with Spotify
                            </MKButton>
                            {/*<MKButton variant="text" color="white">*/}
                            {/*  learn more*/}
                            {/*</MKButton>*/}
                        </Stack>
                    </Grid>
                </Container>
            </MKBox>
            <Card
                sx={{
                    p: 2,
                    mx: {xs: 2, lg: 3},
                    mt: -8,
                    mb: 4,
                    backgroundColor: ({palette: {white}, functions: {rgba}}) =>
                        rgba(white.main, 0.8),
                    backdropFilter: "saturate(200%) blur(30px)",
                    boxShadow: ({boxShadows: {xxl}}) => xxl,
                    overflow: "hidden",
                }}
            >
                <VisualTeasers/>
                <TriviaCarousel/>
            </Card>
            <MKBox pt={6} px={1} mt={6}>
                <DefaultFooter content={footerRoutes}/>
            </MKBox>
        </>
    );
}

export default LoginPage;
