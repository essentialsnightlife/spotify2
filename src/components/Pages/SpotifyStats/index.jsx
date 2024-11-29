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

// Landing page sections
import Testimonials from "components/Pages/Landing/sections/Testimonials";
import Faq from "components/Pages/Landing/sections/Faq";
import Contact from "components/Pages/Landing/sections/Contact";

// Routes
import routes from "@/routes";
import footerRoutes from "@/footer.routes";

// Images
import bgImage from "assets/images/bg-rental.jpeg";
import Stack from "@mui/material/Stack";
import MKButton from "components/MKButton/index";
import SimpleReviewCard from "examples/Cards/ReviewCards/SimpleReviewCard/index.jsx";
import TopArtists from "components/Pages/SpotifyStats/sections/TopArtists/index.jsx";
import TopTracks from "components/Pages/SpotifyStats/sections/TopTracks/index.jsx";

const getProfileImage = (profile) => {
    if (profile.images[0]) {
        const profileImage = new Image(200, 200);
        profileImage.src = profile.images[0].url;
        return profileImage;
    }
}

const periods = [{queryParam: "short_term", label: "Very Recent"}, {
    queryParam: "medium_term",
    label: "Recent",
    default: true
}, {queryParam: "long_term", label: "Long Term"}];

export function SpotifyStats({ profile, topArtists, topTracks, onChange}) {
    const profileImage = profile && getProfileImage(profile);

    return (
        <>
            <DefaultNavbar
                brand="Your Spotify Stats :: Free from Eds"
                routes={[]}
                action={{
                    type: "external",
                    route: "https://www.creative-tim.com/product/material-kit-pro-react",
                    label: "disconnect",
                    color: "info",
                }}
                transparent
                light
            />
            <MKBox
                minHeight="50vh"
                width="100%"
                sx={{
                    backgroundImage: ({
                                          functions: { linearGradient, rgba },
                                          palette: { gradients },
                                      }) =>
                        `${linearGradient(
                            rgba(gradients.dark.main, 0.5),
                            rgba(gradients.dark.state, 0.5)
                        )}, url(${bgImage})`,
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
                        sx={{ mx: "auto", textAlign: "center" }}
                    >
                        <SimpleReviewCard
                        image={profileImage.src}
                        name={profile?.display_name}
                        username="username"
                        review="review"
                        />
                    </Grid>

                </Container>
            </MKBox>
            <Card
                sx={{
                    p: 2,
                    mx: { xs: 2, lg: 3 },
                    mt: -8,
                    mb: 4,
                    backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
                        rgba(white.main, 0.8),
                    backdropFilter: "saturate(200%) blur(30px)",
                    boxShadow: ({ boxShadows: { xxl } }) => xxl,
                    overflow: "hidden",
                }}
            >
                <TopArtists periods={periods} topArtists={topArtists} onChange={onChange} />
                <TopTracks periods={periods} topTracks={topTracks} onChange={onChange} />
                <Testimonials />
                <Faq />
                <Contact />
            </Card>
            <MKBox pt={6} px={1} mt={6}>
                <DefaultFooter content={footerRoutes} />
            </MKBox>
        </>
    );
}

export default SpotifyStats;
