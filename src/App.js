import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const apiUrl = "https://api.quotable.io/random";
  const [quote, setQuote] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const generateQuote = () => {
    setIsLoading(true);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    generateQuote();
  }, []);

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div className="app-container">
      <h1 className="app-title">Best Quote Generator</h1>
      <div className="quote-wrapper">
        <p className="quote-content">{quote.content}</p>
        <span className="quote-author">{quote.author}</span>
      </div>
      <button onClick={generateQuote} className="generate-btn">
        generate
      </button>
    </div>
  );
}

export default App;
