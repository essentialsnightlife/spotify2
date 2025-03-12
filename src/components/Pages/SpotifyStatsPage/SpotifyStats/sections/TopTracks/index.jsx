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

import React, { useRef, useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKBadge from "components/MKBadge/index.jsx";
import MKButton from "components/MKButton/index.jsx";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Material Kit 2 PRO React examples
import HorizontalTeamCard from "components/Cards/TeamCards/HorizontalTeamCard";

// Images
import bgPattern from "assets/images/shapes/pattern-lines.svg";
import { toPng } from "html-to-image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {formatSelectedPeriodLabel, onShareButtonClick} from "../../../../../../utils";

const TopTracksCard = ({ spotifyItem, number }) => {
  const { album, artists, images, name, popularity, external_urls } =
    spotifyItem;
  const href = external_urls?.spotify;
  const formattedArtists = artists?.map((artist) => artist.name).join(", ");

  return (
    <Grid item xs={12} lg={6}>
      <MKBox mb={1}>
        <HorizontalTeamCard
          image={images?.[0]?.url || album?.images?.[0]?.url}
          name={name}
          position={{
            color: "primary",
            label: "#" + number + " | Popularity: " + popularity,
          }}
          description={formattedArtists}
          href={href}
        />
      </MKBox>
    </Grid>
  );
};

function TopTracks({ topTracks, periods, displayName, onChange }) {
  const [dropdown, setDropdown] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState(
    periods?.find((period) => period.default)?.queryParam || ""
  );
  const [selectedPeriodLabel, setSelectedPeriodLabel] = useState(
    periods?.find((period) => period.default)?.label || "Select Period"
  );

  const ref = useRef(null);

  const openDropdown = (event) => setDropdown(event.currentTarget);
  const closeDropdown = () => setDropdown(null);

  const handleSelection = (event, period) => {
    setSelectedPeriod(period.queryParam);
    setSelectedPeriodLabel(period.label);
    onChange(period.queryParam, "tracks");
  };

  const iconStyles = {
    ml: 1,
    fontWeight: "bold",
    transition: "transform 200ms ease-in-out",
  };

  const dropdownIconStyles = {
    transform: dropdown ? "rotate(180deg)" : "rotate(0)",
    ...iconStyles,
  };

  return (
      <MKBox
          position="relative"
          variant="gradient"
          bgColor="light"
          py={4}
          mx={-2}
          sx={{
            background: "linear-gradient(to left, #3E2723, #795548)", // Warm & rich
          }}
      >
        <MKBox
            component="img"
            src={bgPattern}
            alt="background-pattern"
            position="absolute"
            top={0}
            left={0}
            width="100%"
            opacity={0.2}
            display={{xs: "none", md: "block"}}
        />
        <Container maxWidth="md" sx={{position: "relative", zIndex: 3}}>
          <Grid item xs={12} md={6} sx={{textAlign: "center"}}>
            <MKTypography variant="h2" color="white" mb={4}>
              Your Top Tracks
            </MKTypography>
            <MKTypography
                variant="body1"
                color="white"
                fontWeight="light"
                sx={{mb: 2}}
            >
              Here are your top tracks on Spotify, again use the drop down to
              change the period.
            </MKTypography>
            <MKTypography variant="body1" color="white" fontWeight="light">
              Popularity comes from Spotify's Popularity Index, a 0-to-100 score
              after ranking tracks.
            </MKTypography>
            <MKBox component="section" py={6}>
              <Container>
                <Grid container spacing={3} justifyContent="center">
                  <Grid item xs={12} md={6} textAlign="center">
                    <MKButton
                        variant="gradient"
                        color="primary"
                        size="large"
                        onClick={openDropdown}
                        aria-controls={dropdown ? "periods-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={Boolean(dropdown)}
                    >
                      {selectedPeriodLabel}{" "}
                      <Icon sx={dropdownIconStyles}>expand_more</Icon>
                    </MKButton>
                    <Menu
                        id="periods-tracks-menu"
                        anchorEl={dropdown}
                        open={Boolean(dropdown)}
                        onClose={closeDropdown}
                    >
                      {periods &&
                          periods.map((period) => (
                              <MenuItem
                                  key={period.queryParam}
                                  onClick={(e) => {
                                    handleSelection(e, period);
                                    closeDropdown();
                                  }}
                                  selected={selectedPeriod === period.queryParam}
                              >
                                {period.label}
                              </MenuItem>
                          ))}
                    </Menu>
                  </Grid>
                </Grid>
              </Container>
            </MKBox>
          </Grid>
          <div ref={ref}>
            <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
            >
              <Box
                  sx={{
                    backgroundColor: "primary",
                    color: "#FFFFFF",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    textAlign: "center",
                    display: "inline-block",
                    fontSize: "14px",
                    fontWeight: "500",
                    maxWidth: "100%",
                  }}
              >
                <Typography variant="body1" sx={{display: "block"}}>
                  <strong>
                    {`Top Tracks${
                        displayName ? " for " + displayName : ""}`
                    }
                  </strong>
                </Typography>
                <Typography variant="body2" sx={{opacity: 0.8}}>
                  {`${formatSelectedPeriodLabel(selectedPeriod)} | ${new Date().toLocaleString("en-UK", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}`}
                </Typography>
              </Box>
            </div>
            <Grid container spacing={3} pb={2}>
              {topTracks &&
                  topTracks?.map((track, index) => (
                      <TopTracksCard
                          spotifyItem={track}
                          number={index + 1}
                          key={track.id}
                      />
                  ))}
            </Grid>
          </div>
          <Grid
              container
              sx={{mb: 4, justifyContent: "center", alignItems: "center"}}
          >
            <MKButton
                variant="gradient"
                color="primary"
                size="large"
                onClick={() => onShareButtonClick("tracks", displayName)}
                aria-haspopup="true"
                sx={{mt: 4}}
            >
              Share your Top Tracks
              <Icon sx={dropdownIconStyles}>downloading</Icon>
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
  );
}

export default TopTracks;
