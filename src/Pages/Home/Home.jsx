import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Search from "../../Components/Search/Search";
import img from "../../Components/img";

const Home = () => {
  // Declare a state variable for the current doodle URL
  const [doodle, setDoodle] = useState("");

  // Declare an array of possible doodle URLs
  const doodles = img

  // Define a function that updates the doodle URL randomly
  const changeDoodle = () => {
    // Get a random index from the array
    const index = Math.floor(Math.random() * doodles.length);
    // Set the state variable to the corresponding URL
    setDoodle(doodles[index]);
  };

  // Use the useEffect hook to call the function when the component mounts
  useEffect(() => {
    changeDoodle();
  }, []);

  return (
    <div className="home">
      {/* // header  */}
      <div className="home__header">
        <div className="home__headerLeft">
          {/* <h1>Hello</h1> */}
          <Link to="/">About</Link>
          <Link to="/">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        {/* Use the state variable for the image source */}
        <img src={doodle} alt="" />

        <div className="home__inputContainer">
          {" "}
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
