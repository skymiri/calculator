import "./index.css";
import Calculator from "./Calculator.js";
import React from "react";

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;

// function App() {
//   // return <div>ㅎㅇ</div>;
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Sky's <code>Cal</code>
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <Button />
//       </header>
//     </div>
//   );
// }

// export default App;
//-----------------------------------------별

// // react.dev
// function Example() {
//   return (

//     <> {/*JSX markup*/}
//       <h1> html words</h1>
//     </>
//   );
// }

// <div className="name"></div>

// function Example2() {
//   const name = "Name";

//   return (
//     <>
//       <h1>Example page</h1>
//       <p>Hello there, {name}</p>
//     </>
//   );
// }

// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

// export default function Profile() {
//   return (
//     <di>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={'Photo of ' + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize
//         }}
//       />
//     </di>
//   );
// }

// const products = [
//   { title: 'Cabbage', isFruit: false, id: 1 },
//   { title: 'Garlic', isFruit: false, id: 2 },
//   { title: 'Apple', isFruit: true, id: 3 },
// ];

// export default function ShoppingList() {
//   const listItems = products.map(product =>
//     <li
//       key={product.id}
//       style={{
//         color: product.isFruit ? 'blue' : 'darkgreen'
//       }}
//     >
//       {product.title}
//     </li>
//   );

//   return (
//     <ul>{listItems}</ul>
//   );
// }

// // responding to events
// function MyButton() {
//   function handleClick() {
//     alert('You clicked me!');
//   }

//   return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   );
// }

// // update to screen = useState
// import { useState } from 'react';

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Counters that update separately</h1>
//       <MyButton />
//       <MyButton />
//     </div>
//   );
// }

// function MyButton() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <button onClick={handleClick}>
//       Clicked {count} times
//     </button>
//   );
// }
