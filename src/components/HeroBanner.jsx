import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
        textAlign: { lg: "left", xs: "center" },
      }}
      position="relative "
      p="20px"
      border="1px solid black"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight="600"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exersices
      </Typography>
      <Button
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
        variant="contained"
        color="error"
        href="#exercises"
      >
        Explore More Exercise
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: {
            lg: "block",
            xs: "none",
          },
        }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img
        src={HeroBannerImage}
        alt="hero banner"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
