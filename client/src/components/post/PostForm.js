import React from "react"; 
//import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {startPostPost} from '../../actions/postsAction';
//import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
class PostForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            text:'',
          //  errors: {}
        }
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
      }
    //   componentWillReceiveProps(newProps) {
    //     if (newProps.errors) {
    //       this.setState({ errors: newProps.errors });
    //     }
    //   }
      handleChange=(e)=>{
         this.setState({
            [e.target.name]: e.target.value
           })
      }

      handleSubmit(e) {
        e.preventDefault();
    
      //  const { user } = this.props.auth;
    
        const newPost = {
          text: this.state.text,
          name: this.props.user.username,
          avatar: this.props.user.avatar
        };
        console.log('newPost data', newPost)
        this.props.dispatch(startPostPost(newPost));
        this.setState({ text: '' });
      }
    render() {
        // const { errors } = this.state;
    console.log(this.state)
        return (
          <div className="post-form mb-3">
            <div className="card card-info">
              <div className="card-header navb text-black">Share Something...</div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <textarea className='area'
                      placeholder="Create a post"
                      name="text"
                      value={this.state.text}
                      onChange={this.handleChange}
                     // error={errors.text}
                    />
                  </div>
                  <input type='submit' value='submit' className="btn btn-info btn-md waves-effect waves-light"/>
                  {/* <button type="submit" onSubmit={this.handleSubmit} className="btn btn-dark btn-md waves-effect waves-light">
                    Submit
                  </button> */}
                </form>
              </div>
            </div>
          </div>
        );
      }
}

 
  
  const mapStateToProps = (state) =>{
      return {
          user: state.user
 
      }
  }
  
   
  export default connect(mapStateToProps)(PostForm);