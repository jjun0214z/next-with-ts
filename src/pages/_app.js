import ContextProvider from "../contexts/contextProvider";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
export default MyApp;
