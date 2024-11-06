import React from 'react';

const PostForm = ({ newPost, setNewPost, handleAddPost }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.title && newPost.body) {
      handleAddPost({ id: Date.now(), ...newPost });
      setNewPost({ title: '', body: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <h2>Post Form</h2>
      <div className="form-group">
        <label>Title:</label>
        <input type="text" name="title" value={newPost.title} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Body:</label>
        <input type="text" name="body" value={newPost.body} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
