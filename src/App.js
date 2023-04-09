import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const apiUrl = "https://api.quotable.io/random";
  const [quote, setQuote] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Function to handle sharing quote via WhatsApp
  const shareViaWhatsapp = () => {
    const text = `"${quote.content}" - ${quote.author}`; // Format the quote text
    const shareUrl = `whatsapp://send?text=${encodeURIComponent(text)}`; // Construct the share URL
    window.open(shareUrl, "_blank"); // Open the share URL in a new tab
  };

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
    return (
      <div class="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <h1 className="app-title">Best Quote Generator</h1>
      <div className="quote-wrapper">
        <p className="quote-content">{quote.content}</p>
        <span className="quote-author">{quote.author}</span>
      </div>

      <button onClick={shareViaWhatsapp} className="share-whatsapp-btn">
        Share to WhatsApp
      </button>
      <button onClick={generateQuote} className="generate-btn">
        generate
      </button>
    </div>
  );
}

export default App;
