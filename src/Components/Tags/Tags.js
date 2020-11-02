import React from 'react';
import Tag from './Tag';
import styled from 'styled-components';
import PropTypes from 'prop-types'; 

const TagWrapper = styled.div`
    display: inline-block;
    margin-left: 15px;
`;

const Tags = ({ tags }) => (
  tags.map((item, i) => {
    return (
      <TagWrapper key={i}>
        <Tag>{item}</Tag>
      </TagWrapper>
    );
  })
)

Tags.defaultProps = {
  tags: []
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string)
}

export default Tags;
