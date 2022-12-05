import Layout from "../components/Layout";
import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  console.log(
    "process.env.ADMIN_USERNAMEprocess.env.ADMIN_USERNAME",
    process.env.ADMIN_USERNAME
  );
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
