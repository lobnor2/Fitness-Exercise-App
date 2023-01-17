import React, { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchData } from "../utils/fetchData";

const SearchExercises = () => {
  const [searchValue, setSearchValue] = useState("");
  const [exercise, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPartList`
      );
      setBodyParts(["all", ...bodyPartsData]);
      console.log(bodyParts);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (searchValue) {
      const exerciseData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises`
      );
      //   console.log(exerciseData);
      const searchedExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(searchValue) ||
          exercise.target.toLowerCase().includes(searchValue) ||
          exercise.equipment.toLowerCase().includes(searchValue) ||
          exercise.bodyPart.toLowerCase().includes(searchValue)
      );
      setSearchValue("");
      setExercises(searchedExercises);
    }
  };

  //   useEffect(() => {}, []);

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
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
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
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          p: "20px",
        }}
      >
        <HorizontalScrollbar data={bodyParts} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
