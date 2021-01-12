import React  from 'react';
import { connect } from 'react-redux';
import { startDeleteComment } from '../../actions/postsAction';

class CommentItem extends React.Component {
 
      handleDelete(postId, commentId) {
        const data= {
            commentId: commentId
        }
    this.props.dispatch(startDeleteComment(postId, data));
  }

  render() {
    const { comment, postId, user } = this.props;
    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2 zoom">
              <img
                className="rounded-circle mx-auto d-block z-depth-1 img-thumbnail"
                style={{height:'84px',width:'84px'}}
                alt="profile"
                src={comment.avatar}
              />
            <br />
            <p className="text-center">{comment.name}</p>
          </div>
          <div className="col-md-10">
            <div style={{fontSize:'13px'}}dangerouslySetInnerHTML={{ __html: comment.text}}></div>
            {comment.user === user._id ? (
              <button
                onClick={this.handleDelete.bind(this, postId, comment._id)}
                type="button"
                title='Delete Comment'
                className="btn del btn-sm mr-1"
              >
                <i className="fa fa-times" />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
 
const mapStateToProps = state => ({
  user: state.user,
  profile: state.profile
});

export default connect(mapStateToProps)(CommentItem);