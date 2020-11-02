import React, { useState, useEffect } from 'react';
import Posts from "../Posts/Posts";
import InputForm from '../InputForm/InputForm';

const App = () => {

  const [posts, setPosts] = useState([]);

  const pushDataInLocalStorage = () => {
    fetch('./posts.json')
      .then(data => data.json())
      .then(data => data.forEach(post =>
        localStorage.setItem(`post${post.id}`, JSON.stringify(post))))
      .then(() => createPosts());
  };

  useEffect(() => {
    pushDataInLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addItem = ({ id, title, body, tags }) => {
    const key = `post${id}`;
    localStorage.setItem(key, JSON.stringify({ id, title, body, tags }));
    setPosts([...posts, createPostItem(key)]);
  }

  const deleteItem = (id) => {
    localStorage.removeItem(`post${id}`);
    const newArr = posts.filter(el => el.postId !== id)
    setPosts(newArr);
  };

  const createPostItem = (key) => {
    const { title, body, tags, id } = JSON.parse(localStorage.getItem(key));
    return {
      headerName: title,
      body: body,
      tags: tags,
      postId: id
    }
  }

  const createPosts = () => {
    const newArr = Object.keys(localStorage).reduce(
      (total, key) => [...total, createPostItem(key)], [])
    setPosts(newArr);
  }

  return (
    <div>
      <Posts
        onDelete={deleteItem}
        posts={posts}
      />
      <InputForm
        addPost={addItem}
      />
    </div>
  );
}

export default App;