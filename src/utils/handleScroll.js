// import _debounce from "lodash/debounce";
// import { useEffect } from "react";

// export const handleScroll = _debounce(() => {
//   const scrollTop = document.documentElement.scrollTop;

//   if (scrollTop >= 500) {

//   }
// }, 200);

// useEffect(() => {
//   window.addEventListener("scroll", handleScroll);

//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, [handleScroll]);

// const handleScroll = _debounce(() => {
//     const scrollTop = document.documentElement.scrollTop;

//     console.log("scrollTop", scrollTop);

//     if (scrollTop >= 500) {
//       setNavbar(true);
//     } else {
//       setNavbar(false);
//     }
//   }, 200);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [handleScroll]);
