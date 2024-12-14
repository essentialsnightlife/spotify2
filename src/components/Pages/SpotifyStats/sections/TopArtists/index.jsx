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

// Images
import bgPattern from "assets/images/shapes/pattern-lines.svg";
import MKBadge from "components/MKBadge/index.jsx";
import React, {useState} from "react";
import MKButton from "components/MKButton/index.jsx";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const TopArtistsCard = ({spotifyItem, number}) => {
    const {genres, images, name, popularity} = spotifyItem;
    const setGenreLimit = 4
    const formattedGenres = genres?.slice(0, setGenreLimit).join(", ");

    return (
        <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
                <HorizontalTeamCard
                    image={images[0]?.url}
                    name={name}
                    position={{color: "info", label: "#" + number + " | Popularity: " + popularity}}
                    description={formattedGenres}
                />
            </MKBox>
        </Grid>
    );

}


function TopArtists({topArtists, periods, displayName, onChange}) {
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
        <MKBox position="relative" variant="gradient" bgColor="dark" mt={6} py={4} mx={-2}>
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
                        <MKTypography variant="h2" color="white" mb={4}>
                            Top Artists
                        </MKTypography>
                        <MKBadge
                            badgeContent={`For ${displayName || "you"}`}
                            variant="contained"
                            color="white"
                            size="lg"
                            container
                            sx={{mb: 4}}
                        />
                        <MKTypography variant="body1" color="white" fontWeight="light" sx={{mb: 2}}>
                            Here are your most played artists, use the drop down menu to see different time periods.
                        </MKTypography>
                        <MKTypography variant="body1" color="white" fontWeight="light">
                            Popularity comes from Spotify's Popularity Index, a 0-to-100 score after ranking artists.
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
                                            id="periods-artists-menu"
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
                    {topArtists && topArtists?.map((artist, index) => (
                        <TopArtistsCard spotifyItem={artist} number={index + 1} key={artist.id}/>
                    ))}
                </Grid>
            </Container>
        </MKBox>
    );
}

export default TopArtists;
