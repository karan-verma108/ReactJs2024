import { useState } from 'react';
import accordianData from './accordianData';
import { useEffect } from 'react';

export default function NewAccordian() {
  const [singleSelected, setSingleSelected] = useState(null);

  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  const [multiSelected, setMultiSelected] = useState([]);

  const handleSingleSelection = (currentItemId) => {
    setSingleSelected(currentItemId === singleSelected ? null : currentItemId);
  };

  const handleMultiSelection = (currentItemId) => {
    const selectedItems = [...multiSelected];
    const indexOfSelectedItem = multiSelected.indexOf(currentItemId);

    if (indexOfSelectedItem === -1) {
      selectedItems.push(currentItemId);
    } else {
      selectedItems.splice(indexOfSelectedItem, 1);
    }
    setMultiSelected(selectedItems);
  };

  useEffect(() => {
    setSingleSelected(null);
    setMultiSelected([]);
  }, [enableMultiSelection]);

  return (
    <div className='flex flex-col gap-5 items-center w-full'>
      <h1 className='text-4xl'>welcome to my new accordian</h1>

      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className={`border border-black ${
          enableMultiSelection ? 'bg-green-300' : 'bg-red-300'
        } w-1/5 rounded-md`}
      >
        {enableMultiSelection
          ? 'Enabled Multi Select Option'
          : 'Enable Multi Selection'}
      </button>

      <div>
        {accordianData && accordianData.length > 0
          ? accordianData.map((accordianItem) => {
              return (
                <div
                  key={accordianItem.id}
                  onClick={() =>
                    enableMultiSelection
                      ? handleMultiSelection(accordianItem.id)
                      : handleSingleSelection(accordianItem.id)
                  }
                >
                  <div className='flex items-center gap-2 bg-yellow-300 border border-black'>
                    <p className='font-semibold'>{accordianItem.question} </p>
                    <span className='text-2xl'>+</span>
                  </div>
                  {singleSelected === accordianItem.id ||
                  multiSelected.indexOf(accordianItem.id) !== -1 ? (
                    <p className='border border-yellow-400 bg-pink-300'>
                      {accordianItem.answer}
                    </p>
                  ) : null}
                </div>
              );
            })
          : 'No data found'}
      </div>
    </div>
  );
}
