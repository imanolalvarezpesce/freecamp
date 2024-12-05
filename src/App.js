import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    const response = await axios.get('https://api.quotable.io/random');
    setQuote(response.data.content);
    setAuthor(response.data.author);
  };

  return (
    <div className="quote-container">
      <h1>Random Quote Machine</h1>
      <p className="quote">"{quote}"</p>
      <p className="author">- {author}</p>
      <button onClick={fetchQuote}>New Quote</button>
    </div>
  );
};

export default App;
