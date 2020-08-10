import React from 'react';
import { connect } from 'react-redux';
import spinner from '../spinner.svg'
import { startPostComment } from '../../actions/postsAction';
import {startGetAllProfiles} from '../../actions/profileAction'

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
     };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.dispatch(startGetAllProfiles( ))
  }

  handleSubmit(e) {
    e.preventDefault();
    const { postId } = this.props; 
    const newComment = {
      text: this.state.text,
      name: this.props.profile[0].fullname,
      avatar: this.props.profile[0].avatar
    };
    this.props.dispatch(startPostComment(postId, newComment));
    this.setState({ text: '' });
  }

  handleChange=(e)=> {
    this.setState({ text: e.target.value })
  }

  render() {
    console.log('CommentForm this.state value is', this.state)
    return (
        <div>
          {this.props.profile.length>0 ? (
            <div className="post-form mb-3">
            <div className="card card-info">
            <div className="card-header navb text-black">
            Write a comment...
            </div>
            <div className="card-body">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                <textarea className='area'
                    placeholder="Reply to post"
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                 />
                </div>
                <button type="submit" className="btn btn-info">
                Submit
                </button>
            </form>
            </div>
            </div>
         </div>
          ):(
            <div>
              <h3>commentform</h3>
            <img src={spinner} alt="spinner" style={{width:'400px',margin:'auto',display:'block'}} />
            </div>
          )}       
      </div>
    );
  }
}
 
const mapStateToProps = state => ({
  profile: state.allProfiles.filter(profile=>profile.email==localStorage.getItem('profileEmail'))
 });

export default connect(mapStateToProps)(CommentForm);