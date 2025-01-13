export default function Card({ imgSrc, animalName = 'A cute animal' }) {
  //passing animalName prop a default value of 'A cute animal' incase the value of animalName prop is undefined or is not not passed from the component. This is a good way to avoid writing {animalName ?? 'A cute animal'} in the paragraph
  return (
    <div className='flex justify-center items-center gap-3 shadow-lg border border-gray-300'>
      <img src={imgSrc} alt='cute dog' width={'30%'} />
      <p className='text-5xl'>{animalName}</p>
    </div>
  );
}
