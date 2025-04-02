/**
 =========================================================
 * Material Kit 2 PRO React - v2.1.1
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-kit-pro-react
 * Copyright 2024 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import fallbackImage from "/noImg.png";
import MKButton from "components/MKButton/index.jsx";
import { SpotifyAttribution } from "components/SpotifyAttribution/index.jsx";

const SpotifyPlayButton = ({ href }) => {
  return (
    <MKButton
      component="a"
      href={href}
      target="_blank"
      rel="noreferrer"
      variant="contained"
      color="primary"
      size="medium"

      sx={{
        mt: 2,
        alignSelf: "flex-start",
        px: 2,
        minWidth: "auto",
        "&:hover": {
          backgroundColor: "#8B0000",
          color: "#5A5A5A",
        },
    }}
    >
      <Icon sx={{ mr: 1 }}>play_circle_outline_icon</Icon>
      {'  '}Listen now
    </MKButton>
  );
};

function HorizontalTeamCard({ image, name, position, description, href }) {
  return (
    <Card sx={{  mt: 3,
      height: "100%", // 👈 forces card to fill parent's height
      display: "flex",
      flexDirection: { xs: "column", lg: "row" },
        flex: 1, // 👈 if inside a flex or Grid item, this helps fill space
      }}>
      {/* Image & Attribution */}
      <MKBox
        sx={{
          width: { xs: "100%", lg: "35%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: 2,
          alignSelf: "stretch",
        }}
      >
        <MKBox
          component="img"
          src={image || fallbackImage}
          onError={(event) => {
            event.currentTarget.src = fallbackImage;
          }}
          alt={name}
          width="100%"
          borderRadius="md"
          shadow="lg"
          sx={{
            mb: 1,
            objectFit: "cover",
            alignSelf: "stretch",
            width: "100%",
            height: { xs: "auto", sm: "200px", lg: "160px" },
            maxHeight: { xs: "none", lg: "160px" },
            borderRadius: "md",
          }}

        />
        <SpotifyAttribution
          logoWidth="60%"
          text=""
          color="dark"
          href={href}
          textAlign="left"
        />
      </MKBox>

      {/* Text content */}
      <MKBox
            pt={{ xs: 1, lg: 2.5 }}
            pb={2.5}
            pr={4}
            pl={{ xs: 2.5, lg: 1 }}
            lineHeight={1}
      >
        <MKTypography sx={{ fontSize: { xs: "h6", md: "h5" }, fontWeight: 800, mb: 0.5 }}>
          {name}
        </MKTypography>
        <MKTypography
          color={position.color}

        >
          {position.label}
        </MKTypography>
            <MKTypography color="text" sx={{ fontSize: { xs: "body2", md: "body1" }, fontWeight: { md: 400 }, mb: 1 }}>
          {description}
        </MKTypography>
        {href && <SpotifyPlayButton href={href} />}
      </MKBox>
    </Card>
  );
}

// Typechecking props for the HorizontalTeamCard
HorizontalTeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string,
};

export default HorizontalTeamCard;
