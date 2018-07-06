import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Body from './Body';
import Navi from './Navi';
import Footer from './Footer';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

class App extends Component {
  render() {
    return (
      <div className="App">
        hi ddddddd
        <Header />
        <Navi />
        <Body />
        <Footer />

        <CommentBox />
        <CommentList />
      </div>
    );
  }
}

export default App;
