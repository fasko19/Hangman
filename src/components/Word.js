import React, { useContext } from 'react';
import HangmanContext from '../HangmanContext';

const Word = () => {
  const { selectedWord, correctLetters } = useContext(HangmanContext);
  return (
    <div className="word">
      {selectedWord.split('').map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        );
      })}
    </div>
  );
};

export default Word;
