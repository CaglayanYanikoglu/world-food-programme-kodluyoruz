import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  // const location = useLocation();
  const navigate = useNavigate();
  /* const handlePosts = () => {
    console.log('post is working');
    setTimeout(() => {
      navigate("../posts", { replace: true });
    }, 3000);
  }; */
  return (
    <>
      <h2>Home</h2>
      <Link to="/posts">Go to Posts page</Link>
      {/* <button onClick={handlePosts}>Say hi then go to posts page</button> */}
    </>
  );
};

export default Home;
