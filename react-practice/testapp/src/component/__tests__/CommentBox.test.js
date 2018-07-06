import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'component/CommentBox';
/* Full rendering practise.
unlike shallow or static rendering, full rendering actually mounts 
 the component in the DOM, which means that tests can affect each 
 other if they are all using the same DOM. use .unmount() to cheanup.
*/
let wrapped;

beforeEach(() => {
	wrapped = mount(<CommentBox />);
})

afterEach(() => {
	wrapped.unmount();
})

it('has a test area and a button', ()=> {
	expect(wrapped.find('textarea').length).toEqual(1);
	expect(wrapped.find('button').length).toEqual(1);
})

//using describe function

describe('simulate textarea value', () => {
	beforeEach(() => {
		//onChange is the handler name, change is the event that binds
		wrapped.find('textarea').simulate('change', {
			target: { value: 'new comment' } //mock event merge in
		});
		//setState is asynchronous, we do not know when it will re-render, need
		// to force update, instead of rely on that behaviour.
		wrapped.update();		
	})
	it('has a text area that users can type in', ()=> {
		expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
	})

	it('textarea get emptied after user submit form', () => {
		wrapped.find('form').simulate('submit');
		wrapped.update();
		expect(wrapped.find('textarea').prop('value')).toEqual('');
	})	
});


