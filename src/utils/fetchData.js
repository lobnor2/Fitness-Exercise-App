const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f12e68dde8msh7f65513efc51dc6p1ffff9jsn2464e507fe2e",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const fetchData = async (url) => {
  const response = await fetch(url, exerciseOptions);
  const data = await response.json();

  return data;
};
