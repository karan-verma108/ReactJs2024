import { useRef, useEffect, useState, useCallback } from 'react';

export default function RandomPasswordGenerator() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [randomPassword, setRandomPassword] = useState('');

  const [isCapitalize, setIsCapitalize] = useState(false);
  const [isNumeric, setIsNumeric] = useState(false);

  const generateRandomPassword = useCallback(
    (min, max) => {
      let finalStr = '';
      for (let i = 0; i < passwordLength; i++) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        finalStr += String.fromCharCode(randomNum);
      }

      setRandomPassword(finalStr);
    },
    [passwordLength] //a new reference of this function will only be created when its dependency passwordLength changes, otherwise React will reuse the same function refernece across all re-renders
  );

  const inputRef = useRef();

  const handleRange = (e) => {
    setPasswordLength(Number(e.target.value));
  };

  const handleCapitalizeChange = () => {
    setIsCapitalize((prevState) => !prevState);
  };

  const handleNumericChange = () => {
    setIsNumeric((prevState) => !prevState);
  };

  const handleCopyClick = (e) => {
    navigator.clipboard.writeText(randomPassword).then(
      () => alert(`Password copied!`),
      (err) => alert('Error', err)
    );
  };

  useEffect(() => {
    if (isCapitalize && isNumeric) {
      generateRandomPassword(48, 90);
    } else if (isCapitalize) {
      generateRandomPassword(65, 90);
    } else if (isNumeric) {
      generateRandomPassword(48, 57);
    } else {
      generateRandomPassword(97, 122);
    }
  }, [isCapitalize, isNumeric, passwordLength, generateRandomPassword]);

  return (
    <div className='flex flex-col gap-4 h-screen justify-center items-center'>
      <div className='flex flex-col gap-5 justify-center items-center relative'>
        <h1>Random Password Generator</h1>
        <div className='flex gap-3 p-3 items-center shadow-lg rounded-lg'>
          <input
            type='text'
            ref={inputRef}
            id='generatedPassword'
            name='generatedPassword'
            value={randomPassword}
            disabled
            className='border border-slate-400 p-2'
          />
          <button
            className='w-fit bg-blue-500 text-white rounded-md p-2 cursor-pointer'
            onClick={handleCopyClick}
          >
            copy
          </button>
        </div>
        <input
          type='range'
          min='8'
          max='20'
          value={passwordLength}
          step={'1'}
          onChange={handleRange}
        />
        <h2 className='absolute w-full border-2 border-red-700 ps-5 rounded-lg top-0 left-80 text-red-600 text-xl'>
          Password length is {passwordLength}
        </h2>
      </div>
      <div className='flex gap-3'>
        <div className='flex gap-2 items-center'>
          <input
            type='checkbox'
            id='capitalLetters'
            name='capitalLetters'
            value={isCapitalize}
            onChange={handleCapitalizeChange}
          />
          <label htmlFor='capitalLetters'>Capitalize</label>
        </div>
        <div className='flex gap-2 items-center'>
          <input
            type='checkbox'
            id='numberLetters'
            name='numberLetters'
            value={isNumeric}
            onChange={handleNumericChange}
          />
          <label htmlFor='numberLetters'>Numbers</label>
        </div>
      </div>
    </div>
  );
}
