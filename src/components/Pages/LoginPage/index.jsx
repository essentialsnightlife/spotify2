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

import React, { useEffect, useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";

// Material Kit 2 PRO React components
import breakpoints from "assets/theme/base/breakpoints";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "components/Navbars/DefaultNavbar";
import DefaultFooter from "components/Footers/DefaultFooter";
import MKButton from "components/MKButton/index";
import VisualTeasers from "components/Pages/LoginPage/sections/VisualTeasers.jsx";

// Routes
import footerRoutes from "@/footer.routes";

// Images
import vibrantMusicFestival from "/vibrantMusicFestival.jpg";
import { SpotifyAttribution } from "components/SpotifyAttribution/index.jsx";

function LoginPage({ onClick }) {
  const [brandText, setBrandText] = useState(
    "Your Spotify Stats | Free from DJ Eds D1"
  );

  // use this to change brand text
  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setBrandText("Your Spotify Stats");
      } else {
        setBrandText("Your Spotify Stats | Free from DJ Eds D1");
      }
    }

    /**
     The event listener that's calling the displayMobileNavbar function when
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  return (
    <>
      <DefaultNavbar
        brand={brandText}
        routes={[]}
        action={{
          type: "external",
          onClick: () => onClick(),
          label: "spotify connect",
          color: "primary",
        }}
        transparent
        light
      />
      <MKBox
        minHeight="80vh"
        width="100%"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.7), // Update opacity here
              "rgba(16, 12, 8, 0.85)" // Update opacity here
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
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h2"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Welcome to Your Spotify Stats
            </MKTypography>
            <MKTypography variant="body1" color="white" mt={1}>
              Tell your musical stories with this free tool.
              <br /> You can view your top artists and most played tracks on
              Spotify for different time ranges.
            </MKTypography>
            <Stack direction="row" spacing={1} mt={6} mb={3}>
              <MKButton variant="gradient" color="primary" onClick={onClick}>
                Login with Spotify
              </MKButton>
            </Stack>
             <Grid container direction="column" alignItems="center" mt={2}>
                 <SpotifyAttribution />
             </Grid>
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
        <VisualTeasers />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default LoginPage;
