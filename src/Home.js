import { useEffect, useState } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";
const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("https://jsonserver-ten.vercel.app/blogs");

  return (
    <div className="Home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading....</div>}
      {blogs && <Bloglist blogs={blogs}></Bloglist>}
    </div>
  );
};

export default Home;
