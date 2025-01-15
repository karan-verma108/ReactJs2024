export default function RandomPasswordGenerator() {
  let finalStr = '';

  for (let i = 0; i < 8; i++) {
    const randomNum = Math.floor(Math.random() * (122 - 97 + 1)) + 97; //for small characters
    // const randomNum = Math.floor(Math.random() * (90 - 65 + 1)) + 65; //for capital characters
    finalStr += String.fromCharCode(randomNum);
  }

  console.log(finalStr);

  return <h1>password generator</h1>;
}
