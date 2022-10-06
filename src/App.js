import React from 'react';
import Header from './components/Header';
import HangmanIlustration from './components/HangmanIlustration';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import GenerateKeypad from './components/GenerateKeypad';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HnagmanProvider } from './HangmanContext';

function App() {
  return (
    <>
      <HnagmanProvider>
        <Header />
        <div className="game-container">
          <HangmanIlustration />
          <WrongLetters />
          <Word />
        </div>
        <div className="key-pad">
          <GenerateKeypad />
        </div>
        <Popup />
      </HnagmanProvider>
    </>
  );
}

export default App;
