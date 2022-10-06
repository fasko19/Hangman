import React, { useContext } from 'react';
import { Button, Progress } from 'reactstrap';
import HangmanContext from '../HangmanContext';

const Header = () => {
  const { NewWord, wrongLetters } = useContext(HangmanContext);
  return (
    <>
      <h1>Hangman</h1>
      <p>Find the hidden word</p>
      <Button className={'m-2'} color="primary" onClick={NewWord}>
        New Word
      </Button>
      <div>
        <div style={{ width: '400px' }}>
          <div style={{ textAlign: 'center' }}>{6 - wrongLetters.length}</div>
          <>
            {wrongLetters.length === 0 && <Progress className="my-3" color="success" value={100} />}
          </>
          <>
            {wrongLetters.length === 1 && <Progress className="my-3" color="success" value={100} />}
          </>
          <>
            {wrongLetters.length === 2 && <Progress className="my-3" color="warning" value={60} />}
          </>
          <>
            {wrongLetters.length === 3 && <Progress className="my-3" color="warning" value={60} />}
          </>
          <>
            {wrongLetters.length === 4 && <Progress className="my-3" color="danger" value={20} />}
          </>
          <>
            {wrongLetters.length === 5 && <Progress className="my-3" color="danger" value={20} />}
          </>
          <>{wrongLetters.length === 6 && <Progress className="my-3" value={0} />}</>
        </div>
      </div>
    </>
  );
};

export default Header;
