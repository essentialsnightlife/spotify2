// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
// import InstagramIcon from "@mui/icons-material/Instagram";

// Material Kit 2 PRO React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";
import SvgIcon from "@mui/material/SvgIcon";
import React from "react";

const InstagramIcon = ({ width = "2em", height = "2em", ...props }) => {
  return (
    <SvgIcon
      {...props}
      style={{ width, height, ...props.style }}
      viewBox="0 0 24 24"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.427.41a4.92 4.92 0 011.751 1.002 4.92 4.92 0 011.002 1.751c.17.457.356 1.256.41 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.41 2.427a4.92 4.92 0 01-1.002 1.751 4.92 4.92 0 01-1.751 1.002c-.457.17-1.256.356-2.427.41-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.427-.41a4.92 4.92 0 01-1.751-1.002 4.92 4.92 0 01-1.002-1.751c-.17-.457-.356-1.256-.41-2.427-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.97.41-2.427a4.92 4.92 0 011.002-1.751 4.92 4.92 0 011.751-1.002c.457-.17 1.256-.356 2.427-.41 1.266-.058 1.646-.07 4.85-.07m0-2.163C8.745 0 8.332.013 7.053.072 5.787.13 4.825.315 4.1.57 3.375.826 2.75 1.252 2.075 1.926 1.4 2.6.974 3.225.718 3.95.462 4.675.277 5.637.219 6.903.16 8.182.147 8.595.147 12s.013 3.818.072 5.097c.058 1.266.243 2.228.499 2.953.256.725.682 1.35 1.356 2.025.674.675 1.299 1.1 2.025 1.356.725.256 1.687.441 2.953.499 1.279.059 1.692.072 5.097.072s3.818-.013 5.097-.072c1.266-.058 2.228-.243 2.953-.499.725-.256 1.35-.682 2.025-1.356.675-.674 1.1-1.299 1.356-2.025.256-.725.441-1.687.499-2.953.059-1.279.072-1.692.072-5.097s-.013-3.818-.072-5.097c-.058-1.266-.243-2.228-.499-2.953-.256-.725-.682-1.35-1.356-2.025-.674-.675-1.299-1.1-2.025-1.356-.725-.256-1.687-.441-2.953-.499C15.818.013 15.405 0 12 0zM12 5.838a6.162 6.162 0 00-6.162 6.162A6.162 6.162 0 0012 18.162 6.162 6.162 0 0018.162 12 6.162 6.162 0 0012 5.838zm0 10.326a4.164 4.164 0 110-8.328 4.164 4.164 0 010 8.328zm6.406-11.845a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z" />
    </SvgIcon>
  );
};

const TikTokIcon = ({ color = "#9d0007" }) => {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="2em"
      height="2em"
    >
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>
  );
};

const SoundCloudIcon = ({ color = "#9d0007" }) => {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="2em"
      height="2em"
    >
      <path d="M33.5,19.2c-1.2,0-2.4,0.3-3.4,0.8c-0.4-3.2-2.3-5.9-5.3-7.1c-2.7-1.1-5.7-0.6-8,1.2c-2.4,1.9-3.8,5.1-3.8,8.5v10.5H9.5 C8.1,33,7,31.9,7,30.5v-3c0-1.4,1.1-2.5,2.5-2.5H13c0.6,0,1-0.4,1-1v-1c0-5.1,3.8-9.5,8.7-10.4c1.5-0.3,3.1-0.1,4.5,0.5 c2.9,1.3,4.7,4.1,4.7,7.4V19c0,0.6,0.4,1,1,1c3.6,0,6.5,2.9,6.5,6.5s-2.9,6.5-6.5,6.5H34c-0.6,0-1-0.4-1-1v-8.8 c0-0.6-0.4-1-1-1H28c-0.6,0-1,0.4-1,1v8.8c0,0.6-0.4,1-1,1H14c-0.6,0-1-0.4-1-1v-10c0-3.6,1.9-6.9,4.9-8.8c3-1.9,6.7-2.2,9.8-0.7 c2.3,1,4.1,3.1,4.8,5.7c1.3-0.7,2.7-1.1,4.1-1.1c5.2,0,9.5,4.3,9.5,9.5s-4.3,9.5-9.5,9.5h-1.5c-0.6,0-1-0.4-1-1v-2.2 c0-0.6,0.4-1,1-1H33.5c4.1,0,7.5-3.4,7.5-7.5S37.6,19.2,33.5,19.2z" />
    </svg>
  );
};

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Your Music Stats by DJ Eds D1",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/eds_d1/",
      title: "DJ Eds D1 Instagram",
    },
    {
      icon: <TikTokIcon />,
      link: "https://www.tiktok.com/@dj_eds_d1",
      title: "DJ Eds D1 TikTok",
    },
    {
      icon: <SoundCloudIcon />,
      link: "https://soundcloud.com/eds_d1",
      title: "DJ Eds D1 SoundCloud",
    },
  ],
  menus: [
    {
      name: "legal",
      items: [
        { name: "licenses (EULA)", href: "/legal/eula" },
        { name: "privacy policy", href: "/legal/privacy" },
      ],
    },
  ],
  copyright: (
    <MKTypography color="primary" variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Spotify Stats by{" "}
      <MKTypography
        component="a"
        title="DJ Eds D1 Instagram"
        href="https://www.instagram.com/eds_d1/"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
        color="primary"
      >
        DJ Eds D1
      </MKTypography>
      .
    </MKTypography>
  ),
};
