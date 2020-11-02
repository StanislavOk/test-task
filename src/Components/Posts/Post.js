import React from 'react';
import Tags from '../Tags/Tags';
import styled from 'styled-components';
import PropTypes from 'prop-types'; 

const Header = styled.header`
    margin: 15px;
`;
const Section = styled.section`
    margin: 15px;
`;
const Button = styled.button`
    margin: 15px;
`;

const Post = ({ headerName, body, tags, onDelete }) => (
  <article>
    <Header>
      <h3>{headerName}</h3>
    </Header>
    <Section>
      <p>{body}</p>
    </Section>
    <div>
      <Tags tags={tags} />
    </div>
    <Button className="btn btn-danger btn-mini" onClick={onDelete}>
      удалить
            </Button>
  </article>
);

Post.defaultProps = {
  headerName: '',
  body: '',
  tags: [],
  onDelete : () => null
}

Post.propTypes = {
  headerName: PropTypes.string,
  body: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  onDelete: PropTypes.func
}

export default Post;