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

import React from "react";

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";

// Material Kit 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// LoginPage page sections
import TopArtists from "components/Pages/SpotifyStats/sections/TopArtists/index.jsx";
import TopTracks from "components/Pages/SpotifyStats/sections/TopTracks/index.jsx";

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
}

const periods = [{queryParam: "short_term", label: "Very Recent"}, {
    queryParam: "medium_term",
    label: "Recent",
    default: true
}, {queryParam: "long_term", label: "Long Term"}];

export function logout() {
    document.cookie = `${sessionCookie}=; max-age=0; Secure;`;
    localStorage.removeItem("verifier");
    document.location.reload();
}

export function SpotifyStats({profile, topArtists, topTracks, onChange}) {
    const displayName = profile?.display_name

    return (
        <>
            <DefaultNavbar
                brand="Your Spotify Stats | Free from DJ Eds D1"
                routes={[]}
                action={{
                    type: "external",
                    onClick: () => logout(),
                    label: "disconnect",
                    color: "info",
                }}
            />
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
                <TopArtists periods={periods} topArtists={topArtists} displayName={displayName} onChange={onChange}/>
                <TopTracks periods={periods} topTracks={topTracks} displayName={displayName} onChange={onChange}/>
            </Card>
            <MKBox pt={4} px={1}>
                <DefaultFooter content={footerRoutes}/>
            </MKBox>
        </>
    );
}

export default SpotifyStats;
