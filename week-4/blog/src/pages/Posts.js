import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Posts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(res);
      setData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const seeDetailPage = (id) => {
    navigate(`/posts/${id}`);
  }

  return (
    <>
      <div className="posts">
        <h2>Posts</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {data.map(post => (
              <li className="post" key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <button onClick={() => seeDetailPage(post.id)} className="see-more-btn">See More</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Posts;
