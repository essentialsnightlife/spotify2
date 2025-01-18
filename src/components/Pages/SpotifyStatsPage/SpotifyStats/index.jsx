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
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";

// Material Kit 2 PRO React examples
import DefaultNavbar from "components/Navbars/DefaultNavbar";
import DefaultFooter from "components/Footers/DefaultFooter";

// Login page sections
import TopArtists from "components/Pages/SpotifyStatsPage/SpotifyStats/sections/TopArtists/index.jsx";
import TopTracks from "components/Pages/SpotifyStatsPage/SpotifyStats/sections/TopTracks/index.jsx";
import breakpoints from "assets/theme/base/breakpoints";

// Routes
import footerRoutes from "@/footer.routes";

// Images
import { sessionCookie } from "*/constants";

const getProfileImage = (profile) => {
  if (profile.images[0]) {
    const profileImage = new Image(200, 200);
    profileImage.src = profile.images[0].url;
    return profileImage;
  }
};

const periods = [
  { queryParam: "short_term", label: "Very Recent" },
  {
    queryParam: "medium_term",
    label: "Recent",
    default: true,
  },
  { queryParam: "long_term", label: "Long Term" },
];

export function logout() {
  document.cookie = `${sessionCookie}=; max-age=0; Secure;`;
  localStorage.removeItem("verifier");
  document.location.reload();
}

export function SpotifyStats({ profile, topArtists, topTracks, onChange, loading }) {
  const displayName = profile?.display_name;
  const [brandText, setBrandText] = useState(
    "Your Music Stats | Free from DJ Eds D1"
  );

  // use this to change brand text
  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setBrandText("Your Music Stats");
      } else {
        setBrandText("Your Music Stats | Free from DJ Eds D1");
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

  if (loading) return <>Fetching your Spotify Stats...</>;

  return (
    <>
      <DefaultNavbar
        brand={brandText}
        routes={[]}
        action={{
          type: "external",
          onClick: () => logout(),
          label: "disconnect",
          color: "primary",
        }}
        mx={3}
        px="3rem"
      />

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
        <TopArtists
          periods={periods}
          topArtists={topArtists}
          displayName={displayName}
          onChange={onChange}
        />
        <TopTracks
          periods={periods}
          topTracks={topTracks}
          displayName={displayName}
          onChange={onChange}
        />
      </Card>
      <MKBox pt={4} px={1}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default SpotifyStats;
