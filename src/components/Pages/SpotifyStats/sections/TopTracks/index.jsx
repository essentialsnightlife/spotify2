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
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import bgImage from "assets/images/examples/city.jpg";
import team1 from "assets/images/team-5.jpg";
import team2 from "assets/images/bruce-mars.jpg";
import team3 from "assets/images/ivana-squares.jpg";
import team4 from "assets/images/ivana-square.jpg";
import bgPattern from "assets/images/shapes/pattern-lines.svg";
import MKBadge from "components/MKBadge/index.jsx";
import SimpleReviewCard from "examples/Cards/ReviewCards/SimpleReviewCard/index.jsx";
import React, {useState} from "react";
import MKDropdown from "components/MKDropdown/index.jsx";
import MKButton from "components/MKButton/index.jsx";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const TopTracksCard = ({spotifyItem, number}) => {
    const {album, artists, images, name, popularity} = spotifyItem;
    const formattedArtists = artists?.map((artist) => artist.name).join(", ");

    return (
        <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
                <HorizontalTeamCard
                    image={ images?.[0]?.url || album?.images?.[0]?.url }
                    name={name}
                    position={{color: "info", label: "#" + number + " | Popularity: " + popularity}}
                    description={formattedArtists}
                />
            </MKBox>
        </Grid>
    );

}


function TopTracks({ topTracks, periods, onChange}) {
    const [dropdown, setDropdown] = useState(null);
    const [selectedPeriod, setSelectedPeriod] = useState(
        periods?.find((period) => period.default)?.queryParam || ""
    );
    const [selectedPeriodLabel, setSelectedPeriodLabel] = useState(
        periods?.find((period) => period.default)?.label || "Select Period"
    );

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
        <MKBox position="relative" variant="gradient" bgColor="light" mt={6} py={2} mx={-2}>
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
            <Container>
                <Grid
                    container
                    justifyContent="center"
                    sx={{pt: 8, pb: 5, position: "relative", zIndex: 3}}
                >
                    <Grid item xs={12} md={6} sx={{textAlign: "center"}}>
                        <MKBadge
                            badgeContent="tracks"
                            variant="contained"
                            color="warning"
                            size="sm"
                            container
                            sx={{mb: 1}}
                        />
                        <MKTypography variant="h2" color="warning" mb={1}>
                            Top Tracks
                        </MKTypography>
                        <MKTypography variant="body1" color="warning" fontWeight="light">
                            Here are your top tracks based on the selected period.
                        </MKTypography>
                        <MKBox component="section" py={6}>
                            <Container>
                                <Grid container spacing={3} justifyContent="center">
                                    <Grid item xs={12} md={6} textAlign="center">
                                        <MKButton
                                            variant="gradient"
                                            color="info"
                                            onClick={openDropdown}
                                            aria-controls={dropdown ? "periods-artists-menu" : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={Boolean(dropdown)}
                                        >
                                            {selectedPeriodLabel} <Icon sx={dropdownIconStyles}>expand_more</Icon>
                                        </MKButton>
                                        <Menu
                                            id="periods-tracks-menu"
                                            anchorEl={dropdown}
                                            open={Boolean(dropdown)}
                                            onClose={closeDropdown}
                                        >
                                            {periods && periods.map((period) => (
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
                </Grid>
                <Grid container spacing={3}>
                    {topTracks && topTracks?.map((track, index) => (
                        <TopTracksCard spotifyItem={track} number={index + 1} key={track.id}/>
                    ))}
                </Grid>
            </Container>
        </MKBox>
    );
}

export default TopTracks;
