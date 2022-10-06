import React, { createContext, useState, useEffect } from 'react';
import { RandomWord } from './RandomWord';

const HangmanContext = createContext();

let selectedWord = RandomWord();
export function HnagmanProvider({ children }) {
  const [correctLetters, setCorrectLetters] = useState([
    selectedWord[0],
    selectedWord[selectedWord.length - 1],
  ]);

  const [wrongLetters, setWrongLetters] = useState([]);

  useEffect(() => {
    const stringifiedData = localStorage.getItem('dataObject');
    const objectData = JSON.parse(stringifiedData);

    if (localStorage.getItem('dataObject') !== null) {
      selectedWord = objectData.word;
      setCorrectLetters(objectData.correct);
      setWrongLetters(objectData.wrong);
    }
  }, []);

  function ButtonClick(event) {
    let letter = event.target.value;
    setCorrectLetters((currentLetters) => [...currentLetters, letter]);
    if (!selectedWord.split('').includes(letter)) {
      setWrongLetters((currentLetters) => [...currentLetters, letter]);
    }
  }

  function PlayAgain() {
    selectedWord = RandomWord();
    setCorrectLetters([selectedWord[0], selectedWord[selectedWord.length - 1]]);
    setWrongLetters([]);
    localStorage.clear();
  }

  function NewWord() {
    selectedWord = RandomWord();
    setCorrectLetters([selectedWord[0], selectedWord[selectedWord.length - 1]]);
    setWrongLetters([]);
    localStorage.clear();
  }

  if (correctLetters.length > 2 || wrongLetters.length > 0) {
    let dataObject = {
      word: selectedWord,
      correct: correctLetters,
      wrong: wrongLetters,
    };
    localStorage.setItem('dataObject', JSON.stringify(dataObject));
  }
  return (
    <HangmanContext.Provider
      value={{
        correctLetters,
        wrongLetters,
        selectedWord,
        ButtonClick,
        PlayAgain,
        NewWord,
      }}
    >
      {children}
    </HangmanContext.Provider>
  );
}
export default HangmanContext;
