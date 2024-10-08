import './App.css';
import { useState } from 'react';
import Card from './Card.jsx';
import questions from './questions.json'; // Import the JSON file

const App = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0); // Initial card is the first one
  const [flipped, setFlipped] = useState(false); // State to track flipped status
  const [guess, setGuess] = useState(""); // State to track user input
  const [response, setResponse] = useState(""); // State to give feedback to the user

  // Handle user input
  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleSubmitGuess = () => {
    if (guess.trim().toLowerCase() === questions[currentCardIndex].answer.trim().toLowerCase()) {
      setResponse("Correct!");
    } else {
      setResponse("Incorrect, try again!");
    }
  };

  const getNextCard = () => {
    let newIndex = (currentCardIndex + 1) % questions.length;
    setCurrentCardIndex(newIndex);
    setFlipped(false);
    setGuess("");
    setResponse("");
  };

  const getPreviousCard = () => {
    let newIndex = (currentCardIndex - 1 + questions.length) % questions.length;
    setCurrentCardIndex(newIndex);
    setFlipped(false);
    setGuess("");
    setResponse("");
  };

  return (
    <div className="App">
      <center>
        <img src="https://cdn-icons-png.freepik.com/256/6988/6988878.png?semt=ais_hybrid" height="150px" alt="cat icon" />
        <h1>Cat Trivia</h1>
        <h2>Test your knowledge on all things cat with these 15 trivia flashcards!</h2>
        <Card
          question={questions[currentCardIndex]}
          flipped={flipped}
          setFlipped={setFlipped}
        />
        <div>
          <br></br>
          <input
            type="text"
            value={guess}
            onChange={handleGuessChange}
            placeholder="Enter your guess!"
          />
          <br></br>
          <br></br>
          <button className='submitButton' onClick={handleSubmitGuess}>Submit Guess</button>
        </div>
        {response && <p>{response}</p>}
        <br />
        <button className='button' onClick={getPreviousCard}>Back</button>
        <button className='button' onClick={getNextCard}>Next</button>
      </center>
    </div>
  );
};

export default App;
