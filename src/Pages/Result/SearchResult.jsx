// eslint-disable-next-line
import { useState, useEffect } from "react";
import "./SearchResult.css";
import { useStateValue } from "../../Components/Provider/StateProvider";
import useGoogleSearch from "../../useGoogleSearch";
import Response from "../../Response";
import { Link } from "react-router-dom";
import img from "../../Components/img";
import Search from "../../Components/Search/Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Images from "../../Components/Images/Images"

const SearchResult = () => {
  const [doodle, setDoodle] = useState("");

  // Declare an array of possible doodle URLs
  const doodles = img;

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

  const [{ term  }, dispatch] = useStateValue();

  // Live Api Call
  const { data } = useGoogleSearch(term);


  // Mock api call
  // const data = Response;

  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img src={doodle} alt="" className="searchPage__logo" />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images" >
                  Images
                </Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {(term  ) && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a className="searchPage__result" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      a
                    />
                  )}
                {item.displayLink}
              </a>

              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
          </div>
      )}
    </div>
  );
};

export default SearchResult;

{
  /* <a href={item.link}>
                <img
                  className="searchPage__resultImage"
                  src={item.pagemap?.cse_image[0]?.src}
                  alt=""
                />
                {item.displayLink}
              </a> */
}
