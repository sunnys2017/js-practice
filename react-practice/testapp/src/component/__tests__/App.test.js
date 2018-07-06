import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

/*change relative path to absolute path
import App from '../App';
import CommentBox from '../commentBox';
import CommentList from '../commentList';
*/
import App from 'component/App';
import CommentBox from 'component/CommentBox';
import CommentList from 'component/CommentList';
import Body from 'component/Body';
import Header from 'component/Header';
import Footer from 'component/Footer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  expect(div.innerHTML).toContain('hi ddddddd');

  ReactDOM.unmountComponentAtNode(div);
});

it('shows a comment box', () => {
	/*command line env -> Jest -> JSDOM(simulate how browser behave)
	  tell JSDOM libary to creat fake div element, (in memory, not 
	  attach to any browser), take HTML produced by App component(instance),
	  render it into this JSDOM div. 
	*/
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	/*test behave; 
		better test if another component exist instead of 
	    test what that component contains.
	*/ 
	//expect(div.innerHTML).toContain('comment box'); //bad approach

	//remove/clean the entire div created earlier. save memory.
	ReactDOM.unmountComponentAtNode(div);
})

let wrapped;
beforeEach(() => {
	wrapped = shallow(<App />);
})

it('shows comment component', () => {
	expect(wrapped.find(CommentBox).length).toEqual(1);
	expect(wrapped.find(CommentList).length).toEqual(1);
})

it('shows header component', () => {
	expect(wrapped.find(Header).length).toEqual(1);
})

it('shows body component', () => {
	expect(wrapped.find(Body).length).toEqual(1);
})

it('shows footer component', () => {
	expect(wrapped.find(Footer).length).toEqual(1);
})


