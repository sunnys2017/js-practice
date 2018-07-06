import React, { Component } from 'react';


class CommentBox extends Component {
	state = { comment: '' };

	//arraw function be called by event object that presents user typing.
	// so we need to receive event object, and update target.value.
	handleChange = event => {
		this.setState({ comment: event.target.value })
	};

	handleSubmit = event => {
		event.preventDefault();
		//to do: call action creator, save comment
		this.setState({ comment: '' });
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h4>add a comment</h4>
				<textarea onChange={this.handleChange} value={this.state.comment}/>
				<div>
					<button>Submit Comment</button>
				</div>
			</form>
		)
	}
} 

export default CommentBox;
