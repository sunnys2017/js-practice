import React, { Component } from 'react';
import '../css/Body.css'
class Body extends Component {

	render() {
		return (
			<div>
				Enter a Comment
				<testarea>Here is my comment</testarea>
				<button>Submit</button>
				<label>i am a test comment</label>
				<label>another test comment</label>
				<label>final test comment</label>
			</div>
		)
	}

}

export default Body;