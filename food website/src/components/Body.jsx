import React, { useState, useEffect } from "react";

import restaurantList, { IMG_CDN_URL } from "../constants";

import RestaruantCard from "./resturant/RestaruantCard";
function filterData(searchData, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchData)
  );
}

function Body() {
  const [searchData, setSearchData] = useState("");

  const [restaurants, setRestaurants] = useState(restaurantList);

  console.log(searchData);
  useEffect(() => {
    solve();
  }, []);
  // const getRestaurants = async () => {
  //   try {
  //     const data = await fetch(
  //       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667"
  //     );
  //     const json = await data.json();
  //     console.log(json);
  //     async function checkJsonData(jsonData) {
  //       for (let i = 0; i < jsonData?.data?.cards.length; i++) {
  //         let checkData =
  //           json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
  //             ?.restaurants;  
  //         if (checkData !== undefined) {
  //           return checkData;
  //         }
  //       }
  //     }
  //     const resData = await checkJsonData(json);
  //     console.log(resData);
  //     setRestaurants(resData);
  //     // setFilterdRestaurant(resData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

    const solve = async () => {
      try {
     const response = await fetch(
       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667"
    );
        const result = await response.json();
        console.log(result);
        //setRestaurants(result?.data?.card[2]?.card.card.gridElements?.infoWithStyle?.restaurants)
        console.log(result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        //setRestaurants(result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      } catch (error) {
        console.error(error);
      }
    };

  

  //console.log(restaurants)
  return (
    <div>
      <input
        type="text"
        placeholder="Enter text here.."
        value={searchData}
        className="h-16  w-50  ml-96  mt-4 outline-0 text-xl  text-bold"
        onChange={(e) => {
          setSearchData(e.target.value);
        }}
      />
      <button
        className="bg-orange-400 p-4  text-white text-xl rounded-md"
        onClick={() => {
          const data = filterData(searchData, restaurants);
          setRestaurants(data);
        }}
      >
        Search
      </button>

      <div>
        {restaurants.map((restaurant, idx) => {
          return <RestaruantCard {...restaurant.data} key={idx} />;
        })}
      </div>
    </div>
  );
}

export default Body;
