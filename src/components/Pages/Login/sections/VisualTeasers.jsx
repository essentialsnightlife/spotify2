import React from "react";

import MKBox from "components/MKBox/index.jsx";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKTypography from "components/MKTypography/index.jsx";

import jamieXXCard from "/screenshots/jamieXxTrack.png";
import futureCard from "/screenshots/futureCard.png";

export default function VisualTeasers() {
  return (
    <MKBox component="section" mt={6} mb={3}>
      <Container>
        <MKTypography
          variant="h2"
          align="center"
          fontWeight="bold"
          sx={{ mb: 4 }}
          gutterBottom
        >
          Explore the Soundtrack of Your Life
        </MKTypography>
        <Grid container alignItems="center">
          <Grid
            item
            sm={12}
            md={6}
            align="center"
            sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 4, md: 0 } }}
          >
            <MKTypography mb={2} sx={{ fontSize: { md: "h6", lg: "h4" }}}>
              Discover your exclusive music insights, now!
            </MKTypography>
            <MKTypography variant="body1" color="text" mb={3}>
              Easily find trends and explore your favourite sounds over the last
              week or longer, using insights you couldn't find on Spotify
              Wrapped.
            </MKTypography>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox
                component="img"
                src={futureCard}
                alt="macbook"
                width="100%"
              />
            </MKBox>
          </Grid>
        </Grid>
        <Grid container alignItems="center" sx={{ mt: 4 }}>
          <Grid
            item
            sm={12}
            md={6}
            sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 4, md: 0 } }}
            align="center"
          >
            <MKTypography mb={2} sx={{ fontSize: { md: "h6", lg: "h4" }}}>
              Do you like crowd-pleasers or underground sensations?
            </MKTypography>
            <MKTypography variant="body1" color="text" mb={3}>
              We source data from Spotify's Popularity Index to show you how
              popular or niche your favourite music is.
            </MKTypography>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox
                component="img"
                src={jamieXXCard}
                alt="macbook"
                width="100%"
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}
