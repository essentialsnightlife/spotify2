import React from 'react';
/*
=========================================================
* Material Kit 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useRef, useState } from "react";

// SwiperJS
import SwiperCore, { Autoplay, Navigation } from "swiper";

// SwiperJS react components
import { Swiper, SwiperSlide } from "swiper/react";

// SwiperJS styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function TriviaCarousel() {
  // install SwiperJS modules
  SwiperCore.use([Autoplay, Navigation]);

  // SwiperJS navigation buttons ref
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const [swiperEl, setSwiperEl] = useState(null);

  const slideTo = (index) => swiperEl && swiperEl.slideTo(index);

  const slides = [
    {
      image:
        "https://i.ibb.co/r2pM372/images.jpg",
      label: "Top 8 most streamed albums of 2024 on Spotify are exclusively female artists",
      title: "A Woman's World",
      description: "This list features Taylor Swift (3 times!), Billie Eilish, Sabrina Carpenter, Karol G, Ariana Grande and SZA.",
    },
    {
      image:
        "https://i.ibb.co/3sptkQs/Kanye-West-Drake-6a6d0261d0264b1ab8639be9f82cdea5.jpg",
      label: "Drake && Kanye make top 3 in Spotify UK's most streamed artists",
      title: "Falling Off?",
      description: "Despite their controversies and predicted downfalls, only Taylor Swift was streamed more on Spotify in the UK during 2024 than Drake(2nd) and Kanye West (3rd).",
    },
    {
      image:
        "https://i.ibb.co/JdK5S0q/outfits-worn-by-sabrina-carpenter-for-the-opening-night-of-v0-iuc0bg9umsqd1.jpg",
      label: "Sabrina Carpenter's track 'Espresso' is Spotify's most streamed song, globally",
      title: "Espresso",
      description: "This track got 1.6 billion streams, meaning American artist Sabrina Carpenter could potentially have made £5,685,561 from royalties.",
    },
    {
      image:
        "https://i.ibb.co/myLkYFr/tsmed.jpg",
      label: "Taylor Swift retains most streamed artist on Spotify status in 2024",
      title: "Small Jumps",
      description: "Taylor got more than 26.6 billion streams globally in 2024, a light increase from 26.1 billion for the previous year.",
    },
  ];

  const steps = [
    {
      number: "1.",
      label: "A Woman's World",
    },
    {
      number: "2.",
      label: "Falling Off?",
    },
    {
      number: "3.",
      label: "Espresso",
    },
    {
      number: "4.",
      label: "Small Jumps",
    },
  ];

  // Swiper navigation buttons styles
  const navigationStyles = {
    opacity: 0.5,
    cursor: "pointer",
    transition: "opacity 0.15s ease",

    "&:hover, &:focus": {
      opacity: 1,
    },
  };

  return (
    <MKBox component="section" bgColor={"light"} py={6} position="relative">
      <Container>
        <MKTypography variant="h2" align="center" fontWeight="bold" sx={{mb: 4}} gutterBottom>
          Actual Spotify Stats '24
        </MKTypography>
        <Swiper
          onInit={(swiper) => {
            setSwiperEl(swiper);

            const { navigation: nav } = swiper.params;
            const { navigation } = swiper;

            nav.prevEl = navigationPrevRef.current;
            nav.nextEl = navigationNextRef.current;
            navigation.init();
            navigation.update();
          }}
          autoplay={{ delay: 5000 }}
          speed={800}
          spaceBetween={0}
          slidesPerView={1}
          allowTouchMove={false}
          loop
        >
          {slides.map(({ image, label, title, description }) => (
            <SwiperSlide key={label}>
              <Grid container spacing={3} alignItems="center" sx={{ mb: { xs: 6, md: 0 } }}>
                <Grid item xs={12} md={5} ml={{ xs: 0, lg: "auto" }}>
                  <MKBox p={2}>
                    {image && <MKBox
                      component="img"
                      src={image}
                      alt={title}
                      width="100%"
                      borderRadius="xl"
                      maxHeight="37.5rem"
                    />}
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={5} mr={{ xs: 0, lg: "auto" }} position="relative">
                  <MKTypography
                    component="h6"
                    variant="button"
                    opacity={0.7}
                    textTransform="uppercase"
                    fontWeight="bold"
                  >
                    {label}
                  </MKTypography>
                  <MKTypography
                    variant="h1"
                    fontWeight="bold"
                    sx={{
                      fontSize: ({ typography: { d3, d4 } }) => ({
                        xs: d4.fontSize,
                        lg: d3.fontSize,
                      }),
                    }}
                  >
                    {title}
                  </MKTypography>
                  <MKTypography variant="body1" my={3}>
                    {description}
                  </MKTypography>
                </Grid>
              </Grid>
            </SwiperSlide>
          ))}
          <MKBox
            display="flex"
            position="absolute"
            bottom={{ xs: 0, lg: "10%" }}
            right="5%"
            zIndex={2}
          >
            <MKTypography
              variant="h2"
              ref={navigationPrevRef}
              color="dark"
              mr={{ xs: 8, md: 2, lg: 8 }}
              sx={navigationStyles}
            >
              <MKBox className="fas fa-chevron-left" />
            </MKTypography>
            <MKTypography variant="h2" ref={navigationNextRef} color="dark" sx={navigationStyles}>
              <MKBox className="fas fa-chevron-right" />
            </MKTypography>
          </MKBox>
        </Swiper>
        <Grid container mt={4}>
          {steps.map(({ number, label }, index) => (
            <Grid key={label} item xs={6} lg={3} textAlign="center">
              <MKTypography
                variant="body1"
                color="success"
                fontWeight="bold"
                pl={2}
                textGradient
                sx={{ fontFamily: ({ typography: { h1 } }) => h1.fontFamily, cursor: "pointer" }}
                onClick={() => slideTo(index)}
              >
                <MKBox component="span">{number}</MKBox>
                <MKBox component="span" ml={1}>
                  {label}
                </MKBox>
              </MKTypography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default TriviaCarousel;
