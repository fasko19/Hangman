import React, { useContext } from 'react';
import { checkWin } from '../helpers/helpers';
import HangmanContext from '../HangmanContext';

const Popup = () => {
  const { correctLetters, wrongLetters, selectedWord, PlayAgain } = useContext(HangmanContext);
  let finalMessage = '';
  let finalMessageRevealWord = '';

  if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'Congratulations! You won! 😃';
    finalMessageRevealWord = `The word is: ${selectedWord}`;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = 'You lost. 😕';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
  }

  return (
    <div className="popup-container" style={finalMessage !== '' ? { display: 'flex' } : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={PlayAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default Popup;
