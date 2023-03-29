import React from "react";
// import { makeStyles } from "@material-ui/core/styles"; // Styling library

// Custom styles for the image component
// const useStyles = makeStyles({
//   image: {
//     width: "100%",
//     height: "auto",
//     objectFit: "cover",
//     borderRadius: "8px",
//     boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//     transition: "transform 0.3s",
//     "&:hover": {
//       transform: "scale(1.05)",
//     },
//   },
// });

// Image component that receives an image object as prop and renders it
function Images({  }) {
//   const classes = useStyles();

  return (
    <>
    <img
      src={Image.link}
      alt={Image.title}
    //   className={classes.image}
    />
    <h1>Hello</h1>
    </>
  );
  
}

export default Images;