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
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import HorizontalTeamCard from "components/Cards/TeamCards/HorizontalTeamCard";

import bgPattern from "assets/images/shapes/pattern-lines.svg";
import React, { useRef, useState } from "react";
import MKButton from "components/MKButton/index.jsx";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {capitalizeFirstLetters, formatSelectedPeriodLabel, onShareButtonClick} from "../../../../../../utils";

const TopArtistsCard = ({ spotifyItem, number }) => {
  const { genres, images, name, popularity, external_urls } = spotifyItem;
  const href = external_urls?.spotify;
  const setGenreLimit = 4;

  const formattedGenres = genres
      ?.slice(0, setGenreLimit)
      .map(genre => capitalizeFirstLetters(genre))
      .join(", ");

  return (
    <Grid item xs={12} lg={6}>
        <MKBox mb={1}>
          <HorizontalTeamCard
            image={images[0]?.url}
            name={name}
            position={{
              color: "primary",
              label: "#" + number + " | Popularity: " + popularity,
            }}
            description={formattedGenres}
            href={href}
          />
        </MKBox>
    </Grid>
  );
};

function TopArtists({ topArtists, periods, displayName, onChange }) {
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
    onChange(period.queryParam, "artists");
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
          py={6}
          mx={-2}
          mt={6}
          sx={{
              background: "linear-gradient(to right, #141e30, #243b55)", // Modern gradient
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
                  <MKTypography variant="h2" color="white" mt={6} mb={4}>
                      Your Top Artists
                  </MKTypography>
                  <MKTypography
                      variant="body1"
                      color="white"
                      fontWeight="light"
                      sx={{mb: 2}}
                  >
                      Here are your most played artists, use the drop down menu to see
                      different time periods.
                  </MKTypography>
                  <MKTypography variant="body1" color="white" fontWeight="light">
                      Popularity comes from Spotify's Popularity Index, a 0-to-100 score
                      after ranking artists.
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
                                      aria-controls={
                                          dropdown ? "periods-artists-menu" : undefined
                                      }
                                      aria-haspopup="true"
                                      aria-expanded={Boolean(dropdown)}
                                  >
                                      {selectedPeriodLabel}{" "}
                                      <Icon sx={dropdownIconStyles}>expand_more</Icon>
                                  </MKButton>
                                  <Menu
                                      id="periods-artists-menu"
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
              <>
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
                                      {`Top Artists${
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
                      <Grid container pb={2} spacing={3}>
                          {topArtists &&
                              topArtists?.map((artist, index) => (
                                  <TopArtistsCard
                                      spotifyItem={artist}
                                      number={index + 1}
                                      key={artist.id}
                                  />
                              ))}
                      </Grid>
                  </div>
                  <Grid
                      container
                      sx={{mb: 4, justifyContent: "center", alignItems: "center"}}
                  >
                      <MKButton
                          id="share-button"
                          variant="gradient"
                          color="primary"
                          size="large"
                          onClick={() => onShareButtonClick("artists", displayName)}
                          aria-haspopup="true"
                          sx={{mt: 4}}
                      >
                          Share your Top Artists
                          <Icon sx={dropdownIconStyles}>downloading</Icon>
                      </MKButton>
                  </Grid>
              </>
          </Container>
          <div id="shareTopArtists" style={{
              display: "none",
              width: "800px",
              padding: "20px",
              backgroundColor: "#1a1a1a",
              borderRadius: "10px"
          }}>
              <h2 style={{color: "white", textAlign: "center", marginBottom: "5px"}}>
                  {`Top Artists${displayName ? ` for ${displayName}` : ""}`}
              </h2>
              <h4 style={{color: "indianred", textAlign: "center", marginBottom: "10px"}}>
                  {`${formatSelectedPeriodLabel(selectedPeriod)} | ${new Date().toLocaleString("en-UK", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                  })}`}
              </h4>
              <h4 style={{color: "white", textAlign: "center", marginBottom: "10px"}}>
                  www.addUrlhere.com
              </h4>
              {topArtists && (<div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "15px"
              }}>
                  {topArtists.map((artist, index) => (
                      <div key={artist.id} style={{
                          textAlign: "center",
                          padding: "10px",
                          backgroundColor: "#222",
                          borderRadius: "8px"
                      }}>
                          <img src={artist.images[0]?.url} alt={artist.name} style={{
                              width: "120px",
                              height: "120px",
                              borderRadius: "10px",
                              objectFit: "cover"
                          }}/>
                          <p style={{color: "white", fontSize: "22px", fontWeight: "bold"}}>
                              #{index + 1} - {artist.name}
                          </p>
                          <p style={{color: "#aaa", fontSize: "14px", fontStyle: "italic", marginBottom: "3px"}}>
                              Popularity: {artist.popularity}
                          </p>
                          <div style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                          }}>
                              <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
                                   alt="Spotify Logo"
                                   style={{height: "20px", filter: "brightness(0.9)"}}
                              />
                          </div>
                      </div>
                  ))}
              </div>)}
          </div>
      </MKBox>
  );
}

export default TopArtists;
