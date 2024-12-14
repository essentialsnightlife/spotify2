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

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultFooter({ content }) {
  const { brand, socials, menus, copyright } = content;

  return (
    <MKBox component="footer">
      <Container>
        <Grid container>
          <Grid item xs={12} sx={{ textAlign: "center", mb: 1 }}>
            <MKTypography variant="h6" sx={{ mb: 3 }}>{brand.name}</MKTypography>
            {socials.map(({ icon, link, title }, key) => (
                <MKTypography
                    key={key}
                    component="a"
                    href={link}
                    title={title}
                    target="_blank"
                    rel="noreferrer"
                    variant="h5"
                    color="dark"
                    opacity={0.8}
                    mr={key === socials.length - 1 ? 0 : 4}
                >
                  {icon}
                </MKTypography>
            ))}
          </Grid>
          <Grid item xs={12} fontSize="small" sx={{ textAlign: "center", mb: 1 }}>
            Your privacy is respected, we do not store any personal or Spotify data.
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center", my: 3 }}>
            {copyright}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

// Typechecking props for the DefaultFooter
DefaultFooter.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
};

export default DefaultFooter;
