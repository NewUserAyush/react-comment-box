import React from 'react';
import './App.css';
import CommentBox from './comment-box';
const data=require('./data.json');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Comment Box
      </header>
      <CommentBox data={data}></CommentBox>
    </div>
  );
}

export default App;
