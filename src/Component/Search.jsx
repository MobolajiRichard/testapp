import { useState } from "react";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Grid } from "@mui/material";

import axios from "axios";

const Search = () => {

  //state for the input field
  const [searchInput, setSearchInput] = useState("");

  //creating a state to toggle the api link
  const [useSearchLink, setUseSearchLink] = useState(false);

  //Toggling the apilink based on if user has inputted a value and submitted
  const apiLink = !useSearchLink
    ? ``
    : `https://www.omdbapi.com/?s=${searchInput}&apikey=184ffaab`;

  //Fetching the data using react - query
  const { data, isLoading, isError, refetch } = useQuery(
    ["fetchMovies"],
    () => {
      return axios.get(`${apiLink}`).then((res) => res.data);
    }
  );

  //function to call the api with the search value
  const onSearch = (e) => {
    e.preventDefault();
    setUseSearchLink(true);
    refetch();
  };

  return (
    <div className="w-full px-[77px] font-dmsans mt-[98px]">
      <form onSubmit={onSearch} className="w-full ">
        <p className="mb-[4px] text-[16px] md:text-[24px]">Search</p>
        <input
          className="outline-none border w-full border-black indent-3 h-[34px] md:h-[54px]"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </form>
      {isLoading && (
        <p className="text-center text-lg mt-3">Searching........</p>
      )}
      {isError && (
        <p className="text-center text-lg mt-3">
          Oops.... An Error Occured.....
        </p>
      )}
      {(!isLoading || !isError) && (
        <div className="mt-[48px]  text-[18px] md:text-[24px]">
          {data?.Search && (
            <>
              <p className="mb-[4px]">Movie Category</p>
              <Grid container spacing={2}>
                {data?.Search?.map((d) => (
                  <Grid item>
                    <div className="flex items-center justify-center bg-black  w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-[12px] p-[10px]">
                      <p className="text-white">{d.Title}</p>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </div>
      )}
      {!data?.Search && (
        <p className="text-center mt-20 text-3xl">Please Search A Movie!</p>
      )}
    </div>
  );
};

export default Search;
