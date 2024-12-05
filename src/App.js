import React, { useState } from "react";
import './App.css';

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Success is not the key to happiness. Happiness is the key to success.",
      author: "Albert Schweitzer"
    },
    {
      text: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    },
    {
      text: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb"
    },
    {
      text: "It always seems impossible until it's done.",
      author: "Nelson Mandela"
    },
  ];

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex].text);
    setAuthor(quotes[randomIndex].author);
  };

  return (
    <div className="App">
      <h1>Random Quote Machine</h1>
      <p>{quote}</p>
      <h3>- {author}</h3>
      <button onClick={generateQuote}>New Quote</button>
    </div>
  );
}

export default App;
