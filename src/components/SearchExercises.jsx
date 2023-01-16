import React, { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const SearchExercises = () => {
  return (
    <Stack
      alignItems="center"
      mt="37px"
      justifyContent="center"
      p="20px"
      border="1px solid black"
    >
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        textAlign="center"
        mb="50px"
      >
        Awesome Exercise You <br /> Should Know
      </Typography>
      <Box
        position="relative"
        // border="1px solid green"
        display="flex"
        alignItems="center"
        // height="70px"
      >
        <TextField
          sx={{
            input: {
              fontWeight: "500",
              border: "none",
              borderRadius: "4px",
              fontSize: "20px",
            },
            width: { lg: "700px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value=""
          onChange={(e) => {}}
          placeholder="Search Exercises..."
          type="text"
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ff2625",
            height: "59px",
            textTransform: "none",
            marginLeft: "5px",
            width: { lg: "175px", xs: "100px" },
            fontSize: { lg: "20px", xs: "18px" },
            // position: "absolute",
          }}
          className="search-btn"
          //   ml={5}
          //   height="100%"
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
