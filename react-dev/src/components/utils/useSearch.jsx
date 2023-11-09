import { useEffect, useState } from "react";
import useSwiggy from "./useSwiggy";

const useSearch = (allRestaurant) => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState();

  useEffect(() => {
    setFilteredRestaurant(allRestaurant);
  }, [allRestaurant]);

 const updateFilteredRestaurant = (newData) => {
  setFilteredRestaurant(newData[0]);
};

useEffect(() => {
  console.log("onUpdate");
  console.log(filteredRestaurant);
}, [filteredRestaurant]);


  return { searchText, setSearchText, filteredRestaurant, updateFilteredRestaurant };
};

export default useSearch;
