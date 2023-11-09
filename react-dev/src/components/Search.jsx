import useSwiggy from "./utils/useSwiggy";
import useSearch from "./utils/useSearch";
import { useState, useEffect } from "react";

/* function filtersearch(inputValue, allRestaurant) {
  console.log("in filter " + inputValue + " " + allRestaurant[0].info.name);
  const filteredResults = allRestaurant.filter((restaurant) =>
   restaurant.info.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  return filteredResults;
} */

function filtersearch(inputValue, searchRestaurant) {

  const filteredResults = searchRestaurant.filter((Restaurant) => {
    console.log("Restaurant.info.name:", Restaurant.info.name);
    if(Restaurant.info.name.toLowerCase().includes(inputValue.toLowerCase())){
      return true;
    }
  });
  return filteredResults;
}

const Search = () => {
  const allRestaurant = useSwiggy();
  const { searchText, setSearchText, updateFilteredRestaurant  } = useSearch();

  useEffect(() => {
    console.log("searchText updated:", searchText);
  }, [searchText]);

  const handleSearch = () => {
  if (allRestaurant) {
    console.log(allRestaurant);     
    const data = filtersearch(searchText, allRestaurant);
   updateFilteredRestaurant(data);
    console.log(data);
  }
};


  useEffect(() => {
    if (allRestaurant) {
      console.log("2nd " + searchText + " " + allRestaurant);
    }
  }, [searchText, allRestaurant]);

  return (
    <>
      <input
        type="text"
        className="searchBar"
        id="searchInput"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />

      <button
        type="button"
        className="searchButton"
        onClick={handleSearch}
      >
        Search
      </button>
    </>
  );
};

export default Search;
