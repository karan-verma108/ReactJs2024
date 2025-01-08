import React from 'react';

export default function MyApp() {
  const username = 'karan';

  //1) we can also render a react element like this,

  const myAnchorTag = (
    <a href='https://google.com' target='_blank' rel='noreferrer'>
      Google
    </a>
  );

  //   2) another way to create a react element but using the createElement method of React itself
  const newReactElement = React.createElement(
    'button',
    { onClick: () => alert('button is clicked and im a new react element') },
    'click me',
    myAnchorTag //passing an evaluated expression as a variable in this new react element
  );

  return (
    <div>
      {/* so basically when we write here this username inside the html, it's the javascript that is an evaluated expression, which means it's more of a result of an express. We don't write the execution or in the form of js in html, but rather we kind of display the result only here. In other words, if i were to implement a function so i wont implement it here inside the html (jsx) just because i can inject js here, technically react doesn't allow that it only accepts here inside jsx, only an evaluated expression (the result or return value of an expression) */}
      <h1>This is my app and my name is {username}</h1>
      {/* {myAnchorTag} */}
      {newReactElement}
    </div>
  );
}
