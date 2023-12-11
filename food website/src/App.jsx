import {  useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Body from "./components/Body";

function App() {
 
  // const solve = async () => {
  //   try {
  //     const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667");
  //     const result = await response.json()
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   solve();
  // }, []);

  return (
    <>
      <div>
        <Navbar/>
        <Body/>
        <h1>Test</h1>
      </div>
    </>
  );
}

export default App;
