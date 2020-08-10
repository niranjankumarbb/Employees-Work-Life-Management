import React from 'react';
 import PostItem from './PostItem';

class PostFeed extends React.Component {
  render() {
    const { posts } = this.props;
    const { profile } = this.props;

console.log('postFeed component this.props.posts value', this.props.posts)
console.log('postFeed component this.props.profile value', this.props.profile)

    return posts.map(post => <PostItem key={post._id} post={post}  profile={profile}/>);
  }
}

 

export default PostFeed;