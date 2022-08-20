import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const PostDetails = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  const { postId } = useParams();
  
  const navigate = useNavigate();

  const fetchPost = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    setPost(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const seeAllPosts = () => {
    navigate('/posts');
    // navigate(-1); // go back to previous page from history
  }

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={seeAllPosts}>See All Posts</button>
          <Link to="/posts">Go back</Link>
        </>
      )}
    </>
  );
};

export default PostDetails;
