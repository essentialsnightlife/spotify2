import React from "react";
import PropTypes from "prop-types";

import MKTypography from "components/MKTypography/index.jsx";
import MKBox from "components/MKBox/index.jsx";

import spotifyLogoWhite from "/spotifyLogos/Spotify_Full_Logo_RGB_White.png";
import spotifyLogoBlack from "/spotifyLogos/Spotify_Full_Logo_RGB_Black.png";
import spotifyLogoGreen from "/spotifyLogos/Spotify_Full_Logo_RGB_Green.png";

const getSpotifyLogo = (color) => {
  switch (color) {
    case "white":
      return spotifyLogoWhite;
    case "dark":
      return spotifyLogoBlack;
    case "green":
      return spotifyLogoGreen;
    default:
      return spotifyLogoWhite;
  }
};

export const SpotifyAttribution = ({
  text = "Powered by:",
  textAlign = "center",
  color = "white",
  logoAlt = "Spotify Logo",
  logoHeight = "auto",
  logoWidth = "20%",
  href = "",
  textFontWeight = "bold",
}) => {
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <div style={{ textAlign: textAlign }}>
        <MKTypography
          variant="subtitle2"
          color={color}
          fontWeight={textFontWeight}
        >
          {text}
        </MKTypography>
        <MKBox
          component="img"
          src={getSpotifyLogo(color)}
          alt={logoAlt}
          sx={{
            height: logoHeight,
            width: { xs: "25%", lg: logoWidth },
            mt: 1,
          }}
        />
      </div>
    </a>
  ) : (
    <div style={{ textAlign: textAlign }}>
      <MKTypography
        variant="subtitle2"
        color={color}
        fontWeight={textFontWeight}
      >
        {text}
      </MKTypography>
      <MKBox
        component="img"
        src={getSpotifyLogo(color)}
        alt={logoAlt}
        sx={{ height: logoHeight, width: { xs: "25%", lg: logoWidth }, mt: 1 }}
      />
    </div>
  );
};

SpotifyAttribution.propTypes = {
  text: PropTypes.string,
  logoAlt: PropTypes.string,
  logoWidth: PropTypes.string,
  color: PropTypes.string,
  textFontWeight: PropTypes.string,
  href: PropTypes.string,
};

export default SpotifyAttribution;
