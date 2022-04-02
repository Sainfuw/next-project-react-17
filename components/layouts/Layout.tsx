import { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../ui";

export const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Head>
        <title>Layout</title>
      </Head>
      <Navbar />
      <main style={{ padding: "20px 50px" }}>{children}</main>
    </>
  );
};
