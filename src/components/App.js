import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import blogData from '../data/blog'; // Assuming this imports the posts data

function App() {
  return (
    <div className="App">
      <Header name="Underreacted" />
      <About 
        image="https://via.placeholder.com/215" // Default image URL
        about="About this blog" 
      />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
