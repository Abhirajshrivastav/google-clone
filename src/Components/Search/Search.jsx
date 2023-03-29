import React, { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../Provider/StateProvider";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import "./Search.css";
import { _actionTypes } from "../Reducer/Reducer";

const Search = ({ hideButtons = false }) => {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    // trim the input and check if it is empty
    const trimmedInput = input.trim();
    // Get the error element
    let errorElement = document.getElementById("error");
    // Clear any previous error message
    errorElement.innerHTML = "";
    if (trimmedInput.length === 0) {
      // If the input is empty, show an error message in the error element
      errorElement.innerHTML = "Please enter anything";
      // Make the error element visible
      errorElement.style.display = "block";
      // Set a timeout to fade out the error element after 3 seconds
      setTimeout(() => {
        errorElement.style.opacity = "0";
        // Set another timeout to hide the error element after the transition ends
        setTimeout(() => {
          errorElement.style.display = "none";
          // Reset the opacity for the next error message
          errorElement.style.opacity = "1";
        }, 1000);
      }, 3000);
    } else {
      console.log("working", trimmedInput);
      dispatch({
        type: _actionTypes.SET_SEARCH_TERM,
        term: trimmedInput
      });

      navigate(`/search`);
    }
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          placeholder="Search Google or type a URL"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon />
      </div>
      {/* Create an element to show the error message */}
      <p id="error" style={{ color: "red", fontWeight: "bold",
    textAlign: "center" }}></p>
      <div className="search__buttons">
        <Button
          onClick={search}
          type="submit"
          variant="outlined"
          className={hideButtons ? "search__buttonsHidden" : ""}
        >
          Google Search
        </Button>
        <Button
          variant="outlined"
          className={hideButtons ? "search__buttonsHidden" : ""}
        >
          I'm feeling Lucky
        </Button>
      </div>
    </form>
  );
};

export default Search;