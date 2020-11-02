import React, { useState } from 'react';
import PropTypes from 'prop-types'; 
import styled from 'styled-components';

const Button = styled.button`
margin-bottom: 25px;
`;

const InputForm = ({ addPost }) => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState('');

  const handleHeaderChange = (event) => {
    setTitle(event.target.value);
  }

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  }

  const handleTagsChange = (event) => {
    setTags(event.target.value);
  }

  const handleData = (event) => {
    event.preventDefault();
    const newId = localStorage.length + 5;
    const formated = tags.split(',').filter((el) => el !== "");
    const newPost = {
      id: newId,
      title,
      body,
      tags: formated
    }
    addPost(newPost);
    setTitle(''); setBody(''); setTags('');
  }

  return (
    <div>
      <form id="post-add" className="col-lg-4" onSubmit={handleData}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="title"
            placeholder="заголовок"
            maxLength='40'
            required
            onChange={handleHeaderChange}
            value={title}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="body"
            maxLength='100'
            required
            placeholder="запись"
            onChange={handleBodyChange}
            value={body}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="tags"
            placeholder="тег, еще тег"
            onChange={handleTagsChange}
            value={tags}
          />
        </div>
        <Button type="submit" className="btn btn-primary" >
          Добавить
        </Button>
      </form>
    </div>
  )
}

InputForm.defaultProps = {
  addPost: () => null
}

InputForm.propTypes = {
  addPost: PropTypes.func
}

export default InputForm;