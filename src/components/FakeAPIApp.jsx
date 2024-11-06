import React, { useEffect, useState } from 'react';
import PostsContainer from './PostsContainer';
import PostForm from './PostForm';

const FakeApiApp = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState({ title: '', body: '' });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => {
        setData(posts);
        setLoading(false);
      });
  }, []);

  const handleAddPost = (post) => {
    setData([post, ...data]);
  };

  return (
    <div className="app-container">
      <h1>Fake API App</h1>
      <PostForm newPost={newPost} setNewPost={setNewPost} handleAddPost={handleAddPost} />
      {loading ? <p>Loading...</p> : <PostsContainer data={data} />}
    </div>
  );
};

export default FakeApiApp;