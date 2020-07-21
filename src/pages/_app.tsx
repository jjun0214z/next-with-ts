import React, { createContext, useReducer } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}
export default MyApp;
