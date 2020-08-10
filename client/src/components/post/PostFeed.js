import React from 'react';
import PostItem from './PostItem';

class PostFeed extends React.Component {
  render() {
    const { posts } = this.props;
    const { profile } = this.props;
    return posts.map(post => <PostItem key={post._id} post={post}  profile={profile}/>);
  }
}

export default PostFeed;