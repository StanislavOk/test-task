import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types'; 

const Posts = ({ posts, onDelete }) => (
  <div id='posts' className='well'>
    {posts.map(({ postId, headerName, body, tags }) => (
      <div key={postId}>
        <Post
          headerName={headerName}
          body={body}
          tags={tags}
          onDelete={() => onDelete(postId)}
        />
      </div>
    ))}
  </div>
)

Post.defaultProps = {
  posts: {},
  onDelete: () => null
}

Post.propTypes = {
  posts: PropTypes.shape({
    headerName: PropTypes.string,
    body: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string)
  }),
  onDelete: PropTypes.func
}

export default Posts;