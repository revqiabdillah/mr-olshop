import Head from "next/head";
import { NAME_SITE } from "../data";
import Component from '../components/pages/home'

const Home = () => (
  <>
    <Head>
      <title>{NAME_SITE}</title>
    </Head>
    <Component />
  </>
);

export default Home;
