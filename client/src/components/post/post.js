import React from "react"; 
 import {connect} from 'react-redux';
import classnames from 'classnames';
import spinner from '../spinner.svg';
import PostForm from './PostForm';
import PostFeed from './PostFeed';
import {startGetPosts} from '../../actions/postsAction';
class Post extends React.Component {

    componentDidMount(){
       this.props.dispatch(startGetPosts())
    }
  render() {
    console.log('inside post component render')
    console.log('post component this.props.posts value', this.props.posts)

     // const {posts,loading}=this.props.post;
      let postContent;
      if(this.props.posts.length == 0 && this.props.profile.length == 0 ){
        console.log('posts empty , spinner activate')
          postContent=<img src={spinner} alt="spinner" style={{width:'100px',margin:'auto',display:'block'}} />
      }else{
        console.log('post component this.props.posts value', this.props.posts)
        const postsRev= this.props.posts.reverse()
        console.log('postsRev value  is ', postsRev )
          postContent=<PostFeed posts={postsRev} profile={this.props.profile} />;
      }
    return (
    <div className='post'>
     <div className='feed'>
       <div className="container">
           <PostForm />
           {postContent}
       </div>
     </div>
     </div>
    );
  }
}
 
const mapStateToProps=state=>({
    posts:state.posts,
    profile: state.profile
})
export default connect(mapStateToProps)(Post);