function App() {
  const [quotes, setQuotes] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      setQuotes(data);
      console.log(data);

      let randomIndex = Math.floor(Math.random() * data.length);
      setRandomQuote(data[randomIndex]);
    }

    fetchData();
  }, []);

  const generateNewQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  }

  return (
    <div id="quote-box">
      <div id="text">
        <i id="quote" className="fas fa-quote-left fa-xs"></i> { randomQuote.text }
      </div>
      <div id="author">
        - { randomQuote.author }
      </div>

      <div id="action">
        <button id="new-quote" className="btn btn-primary" onClick={generateNewQuote}>
          New quote
        </button>   
        <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
          <i id="twitter-icon" className="fab fa-twitter fa-lg"></i>
        </a>
      </div>
      <div id="footer">
        Developed by Randolph Dy
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);