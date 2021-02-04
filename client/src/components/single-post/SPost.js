import React  from "react"; 
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import spinner from '../spinner.svg'
import PostItem from '../post/PostItem';
import CommentForm from './CommentForm';
import CommentFeed from './CommentFeed';
import {startGetPosts} from '../../actions/postsAction';
import {startGetAllProfiles} from '../../actions/profileAction'

class SPost extends React.Component {

componentDidMount(){
 this.props.dispatch(startGetPosts());
 this.props.dispatch(startGetAllProfiles( ))
}
  render() {
    const {post}=this.props;
    let postContent; 
    if(this.props.post.length == 0 || this.props.profile.length == 0 ){
           postContent=<img src={spinner} alt="spinner" style={{width:'100px',margin:'auto',display:'block'}} />
      }else{
       postContent=(
        <div>
          <PostItem post={this.props.post[0]} profile={this.props.profile} showActions={false}/>
          <CommentForm postId={post[0]._id} />
          <CommentFeed postId={post[0]._id} comments={post[0].comments}/>
        </div>
      )
    }
    return (
     <div className='post'>
       <div className="container">
         <div className="row">
           <div className="col-md-12">
             <Link to='/post' className='btn btn-light btn-md mb-3' >
                Back to Posts
             </Link>
             {postContent}
           </div>
         </div>
       </div>
     </div>
    );
  }
} 
 
const mapStateToProps=(state,props)=>({
  post:state.posts.filter(post=>post._id== props.match.params.id),
  profile: state.allProfiles.filter(profile=>profile.email==localStorage.getItem('profileEmail'))

})

export default connect(mapStateToProps)(SPost);