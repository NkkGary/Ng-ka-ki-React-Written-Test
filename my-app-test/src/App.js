// src/App.js
import React from 'react';
import AppHeader from './components/AppHeader';
import ChatList from './components/ChatList';
import StoryPreview from './components/StoryPreview';
import './App.css';
import data from './materials/sample.json'; // Adjust the path to your sample data

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <StoryPreview />
      <ChatList data={data} />
    </div>
  );
};

export default App;
