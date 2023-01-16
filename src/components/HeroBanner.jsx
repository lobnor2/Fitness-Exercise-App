import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative "
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight="600"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      >
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={2}>
        Check out the most effective exersices
      </Typography>
      <Button variant="contained" color="error" href="#exercises">
        Explore More Exercise
      </Button>
      <img
        src={HeroBannerImage}
        alt="hero banner"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
