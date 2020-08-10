import React  from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { startRemovePosts,startPostLikes, startPostUnlikes } from '../../actions/postsAction';
import post from './post';

class PostItem extends React.Component {

  onDeleteClick(id) {
    this.props.dispatch(startRemovePosts(id));
  }

  onLikeClick(id) {
    this.props.dispatch(startPostLikes(id));
  }

  onUnlikeClick(id) {
    this.props.dispatch(startPostUnlikes(id));
  }

  findUserLike(likes) {
    const { user } = this.props;
    console.log('this.props.post value is', this.props.post)
         if (likes.filter(like => like.user === user._id).length > 0) {
            return true;
          } else {
            return false;
          }
    
   
  }

  render() {
    const { post,profile, user, showActions } = this.props;
    console.log('postItem component this.props.post value is',this.props.post)
    console.log('postItem component  post.user and user._id value is',post.user , user._id)

    return (
      <div className="card card-body mb-3">
         <div className="row">
          <div className="col-md-2 zoom">
            {/* <Link to={`/profile/user/${post.user}`}> */}
            <Link to='#'>
              <img
                className="rounded mx-auto d-block z-depth-1 img-thumbnail"
                 src= {this.props.post.avatar}
                 style={{height:'84px',width:'84px'}}
                alt="photo"
              />
            </Link>
            <br />
            <p className="text-center">{post.name}</p>
          </div>
          <div className="col-md-10">
            <div style={{fontSize:'14px'}} dangerouslySetInnerHTML={{ __html: post.text}}></div>
            {( showActions) ? (
                <span>
                <button
                  onClick={this.onLikeClick.bind(this, post._id)}
                  type="button"
                  className="btn btn-floating btn-light btn-sm mr-1"
                >
                     <i className={classnames('fa fa-thumbs-up', {
                      'text-info': this.findUserLike(post.likes)
 
                    })}
                  />
                  <span className="badge badge-light">{post.likes.length}</span>
                </button>
                <button
                  onClick={this.onUnlikeClick.bind(this, post._id)}
                  type="button"
                  className="btn btn-floating btn-light btn-sm mr-1"
                >
                  
                  <i className="text-secondary fa fa-thumbs-down" />
                  <span className="badge badge-light">{post.unlikes.length}</span>

                </button>
                <Link to={`/post/${post._id}`} className="btn btn-sm btn-floating btn-info mr-1">
                {/* <Link to='#' className="btn btn-sm btn-floating btn-dark mr-1"> */}
                  Comments&nbsp;&nbsp;<span className="counter counter-lg">{post.comments.length ? post.comments.length :''}</span>
                </Link>
                {post.user === user._id ? (
                    <button
                    onClick={this.onDeleteClick.bind(this, post._id)}
                    type="button"
                    title='Delete Post'
                    className="btn btn-floating btn-light btn-sm del mr-1"
                  >
                        
                    <i className="fa fa-times" />
                  </button>
                 ) : null}
               </span>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

PostItem.defaultProps = {
  showActions: true
};

 
const mapStateToProps = state => ({
  user: state.user,
 profile:state.profile
});

export default connect(mapStateToProps )(PostItem)