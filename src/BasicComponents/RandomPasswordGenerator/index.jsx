import { useRef, useEffect, useState } from 'react';

export default function RandomPasswordGenerator() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [min, setMin] = useState(97);
  const [max, setMax] = useState(122);

  const [isCapitalize, setIsCapitalize] = useState(false);

  const generateRandomPassword = () => {
    let finalStr = '';

    for (let i = 0; i < passwordLength; i++) {
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min; //for small characters
      finalStr += String.fromCharCode(randomNum);
    }

    return finalStr;
  };

  const inputRef = useRef();

  const handleRange = (e) => {
    setPasswordLength(e.target.value);
  };

  const handleCopyClick = (e) => {
    navigator.clipboard.writeText(generateRandomPassword()).then(
      //fix this, the copied text doesnt match the shown in the input field
      () => alert('Text copied!'),
      (err) => alert('Error', err)
    );
  };

  useEffect(() => {
    if (isCapitalize) {
      setMin(65);
      setMax(90);
    } else {
      setMin(97);
      setMax(122);
    }
  }, [isCapitalize]);

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
            value={generateRandomPassword()}
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
      <div>
        <div className='flex gap-2 items-center'>
          <input
            type='checkbox'
            id='capitalLetters'
            name='capitalLetters'
            value={isCapitalize}
            onChange={() => setIsCapitalize((prevState) => !prevState)}
          />
          <label htmlFor='capitalLetters'>Capitalize</label>
        </div>
      </div>
    </div>
  );
}
