import React from "react"; 
import {connect} from 'react-redux';
import classnames from 'classnames';
import spinner from '../spinner.svg';
import PostForm from './PostForm';
import PostFeed from './PostFeed';
import {startGetPosts} from '../../actions/postsAction';
class Post extends React.Component {

  componentDidMount(){
    if(this.props.profile.length>0){
      this.props.dispatch(startGetPosts())
    }
  }

  render() { 
     // const {posts,loading}=this.props.post;
      let postContent;
      if(this.props.posts.length == 0 && this.props.profile.length == 0 ){
           postContent=<img src={spinner} alt="spinner" style={{width:'100px',margin:'auto',display:'block'}} />
      }else{
         const postsRev= this.props.posts.reverse()
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