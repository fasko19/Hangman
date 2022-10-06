import React, { useEffect, useState, useContext } from 'react';
import { Button } from 'reactstrap';
import HangmanContext from '../HangmanContext';

function GenerateKeypad() {
  const { ButtonClick, selectedWord, correctLetters } = useContext(HangmanContext);
  const [shuffledArray, setShuffledArray] = useState([]);

  let alphabet = `abcdefghijklmnopqrstuvwxyz`.split('');
  let lettersLeftArray = selectedWord
    .split('')
    .slice(1, selectedWord.length - 1)
    .filter(
      (letter) => letter !== selectedWord[0] && letter !== selectedWord[selectedWord.length - 1]
    );

  let keyLimit = 0;
  if (selectedWord.length > 7) {
    keyLimit = selectedWord.length * 2 - lettersLeftArray.length;
  } else {
    keyLimit = 12 - lettersLeftArray.length;
  }

  useEffect(() => {
    let keyPad = alphabet
      .filter(
        (letter) => letter !== selectedWord[0] && letter !== selectedWord[selectedWord.length - 1]
      )
      .slice(0, keyLimit)
      .concat(lettersLeftArray);

    setShuffledArray(
      keyPad
        .sort((a, b) => 0.5 - Math.random())
        .filter(function (item, pos) {
          return keyPad.indexOf(item) === pos;
        })
    );
  }, [selectedWord]);
  let index = 0;
  if (shuffledArray.length > 0) {
    while (shuffledArray.length < keyLimit + lettersLeftArray.length) {
      if (!shuffledArray.includes(alphabet[index])) {
        if (
          alphabet[index] !== selectedWord[0] &&
          alphabet[index] !== selectedWord[selectedWord.length - 1]
        ) {
          shuffledArray.push(alphabet[index]);
        }
      }

      index++;
      if (shuffledArray.length === 24) break;
    }
  }
  console.log();
  return shuffledArray.map((letter) => (
    <Button
      style={{ margin: '2px', width: '35px', height: '35px', textAlign: 'center' }}
      key={letter}
      value={letter}
      onClick={ButtonClick}
      disabled={correctLetters.includes(letter)}
    >
      {letter}
    </Button>
  ));
}
export default GenerateKeypad;
