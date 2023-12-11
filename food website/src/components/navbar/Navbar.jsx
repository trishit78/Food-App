import React from "react";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div className="flex justify-between  m-6">
        <div>
          <FastfoodIcon style={{ fontSize: 60 }} />
        </div>
        <div className="flex space-x-5  text-bold text-2xl  mt-2">
          <h1>Home</h1>
          <h1>Contact</h1>
          <h1>About</h1>
        </div>
        <div className="flex  mr-4">
          <AddShoppingCartIcon className="mr-4 mt-2" style={{ fontSize: 40 }} />
          <button  style={{fontSize:18 ,backgroundColor: 'rgb(251 146 60)', padding:'12px'}}   className="rounded-md pr-2 pl-4 text-xl text-white text-bold " >
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
