import propTypes from 'prop-types';
import PostHeader from './PostHeader';

import './Post.scss';


function Post(props) {
  return (
    <article 
    className={
      props.post.removed
        ? 'postDeleted'
        : 'post'
    }
    >
      <PostHeader
        onRemove={props.onRemove}
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read,
        }}
      />
      <small>{props.post.subtitle}</small>
      <br />
      Media: {props.post.likes / 2}
    </article>

  );
}

Post.propTypes = {
  onRemove: propTypes.func.isRequired,
  post: propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired,
    likes: propTypes.number.isRequired,
    read: propTypes.bool.isRequired,
    removed: propTypes.bool.isRequired,
  }).isRequired,
};

export default Post


